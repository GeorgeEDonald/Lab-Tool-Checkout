import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom';
import { LAB1_DATA, LAB2_DATA, LAB3_DATA } from '../Data/labData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bgImage from "../assets/loginBG.jpg";
import { IoMdArrowRoundBack } from 'react-icons/io';

const Product = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const combinedData = [...LAB1_DATA, ...LAB2_DATA, ...LAB3_DATA];
    const productsFilter = combinedData.filter((item) => item.name === id);
    const [items] = productsFilter;
    const [selectedTimes, setSelectedTimes] = useState([]);
    const [temporarySelectedTimes, setTemporarySelectedTimes] = useState([]);

    useEffect(() => {
        const storedTimes = JSON.parse(localStorage.getItem('selectedTimes')) || [];
        setSelectedTimes(storedTimes);
    }, []);

    const handleTimeClick = (date, time) => {
        const timeWithDate = { date, time, img: items.img, lab: items.lab, id, name: items.name };
        const isTimeAlreadySelected = temporarySelectedTimes.some(t => t.date === date && t.time === time && t.id === id);

        if (isTimeAlreadySelected) {
            const updatedTimes = temporarySelectedTimes.filter(t => !(t.date === date && t.time === time && t.id === id));
            setTemporarySelectedTimes(updatedTimes);
        } else {
            const updatedTimes = [...temporarySelectedTimes, timeWithDate];
            setTemporarySelectedTimes(updatedTimes);
        }
    };

    const isSelected = (date, time) => temporarySelectedTimes.some(t => t.date === date && t.time === time && t.id === id);
    const isError = (date, time) => selectedTimes.some(t => t.date === date && t.time === time && t.id === id && t.status === 'error');

    const renderTimeSlots = (date, times) => {
        return times.map((time, index) => {
            const isSelectedTime = isSelected(date, time);
            const isErrorTime = isError(date, time);

            return (
                <time
                    key={index}
                    className={`text-zinc-100 border-2 border-zinc-200 transition-all shadow-md p-2 px-4 rounded-lg cursor-pointer ${isSelectedTime ? 'bg-blue-500 text-white' : ''} ${isErrorTime ? 'bg-red-500 text-white' : ''}`}
                    onClick={() => handleTimeClick(date, time)}
                >
                    {time}
                </time>
            );
        });
    };

    const generateTimeSlots = (start, end) => {
        const times = [];
        let currentTime = new Date(start);

        while (currentTime < end) {
            const nextTime = new Date(currentTime.getTime() + 60 * 60 * 1000);
            const formattedTime = `${currentTime.getHours()}:00 - ${nextTime.getHours()}:00 ${currentTime.getHours() < 12 ? 'AM' : 'PM'}`;
            times.push(formattedTime);
            currentTime = nextTime;
        }

        return times;
    };

    const generateDates = (days) => {
        const dates = [];
        const today = new Date();

        for (let i = 0; i < days; i++) {
            const nextDate = new Date(today);
            nextDate.setDate(today.getDate() + i);
            dates.push(nextDate.toDateString());
        }

        return dates;
    };

    const handleCheckOut = () => {
        if (temporarySelectedTimes.length === 0) {
            toast.error('Please select a valid time slot before checking out.');
        } else {
            const updatedTimes = [...selectedTimes, ...temporarySelectedTimes.map(t => ({ ...t, status: 'error' }))];
            setSelectedTimes(updatedTimes);
            localStorage.setItem('selectedTimes', JSON.stringify(updatedTimes));
            setTemporarySelectedTimes([]);
            navigate("/home");
        }
    };

    const labTimes = generateTimeSlots(new Date().setHours(8, 0, 0, 0), new Date().setHours(16, 0, 0, 0));
    const dates = generateDates(3);

    if (!items) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <img src={bgImage} className="fixed -z-10 top-0 left-0 h-screen w-screen" alt="backgroundImage" />
            <div className="max-w-[80rem] m-auto py-10 px-10">
                <ToastContainer />
                <button
                    onClick={() => navigate(-1)}
                    className='bg-zinc-300 text-black px-4 cursor-pointer hover:opacity-80 active:scale-95 font-semibold py-[.7rem] rounded-md transition-all duration-300 mb-4'
                >
                    <IoMdArrowRoundBack /> 
                </button>
                <div className="">
                    <div className="md:flex justify-between gap-5 text-white px-[3rem] pt-8">
                        <div className="flex flex-col gap-3">
                            <img src={items.img} alt="" />
                            <Card.Text className='pt-2 backdrop-blur-md bg-[#ffffff1a] p-3 pb-2 rounded-md'>{items.description}</Card.Text>
                        </div>
                        <div className="max-w-[36.5rem] w-full flex flex-col">
                            <Card.Text className='pb-2 font-semibold'><u>Lab {items.lab}</u></Card.Text>
                            {dates.map((date, index) => (
                                <div key={index}>
                                    <p className='w-full border-2 p-1 mb-2 rounded-md border-zinc-100 font-semibold'>{date}</p>
                                    <div className="p-1 pt-2 flex flex-wrap gap-y-6 gap-x-4">
                                        {renderTimeSlots(date, labTimes)}
                                    </div>
                                </div>
                            ))}
                            <div className="text-end pt-2">
                                <button
                                    onClick={handleCheckOut}
                                    className='bg-zinc-700 text-white px-5 cursor-pointer hover:opacity-80 active:scale-95 font-semibold py-[.7rem] rounded-md transition-all duration-300'
                                >
                                    Check Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
