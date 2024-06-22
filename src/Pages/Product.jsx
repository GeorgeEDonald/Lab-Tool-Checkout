import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom';
import { LAB1_DATA, LAB2_DATA, LAB3_DATA } from '../Data/labData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bgImage from "../assets/loginBG.jpg";

const Product = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const combinedData = [...LAB1_DATA, ...LAB2_DATA, ...LAB3_DATA];
    const productsFilter = combinedData.filter((item) => item.name === id);
    const [items] = productsFilter;
    const [selectedTimes, setSelectedTimes] = useState([]);

    useEffect(() => {
        const storedTimes = JSON.parse(localStorage.getItem('selectedTimes')) || [];
        setSelectedTimes(storedTimes);
    }, []);

    const handleTimeClick = (date, time) => {
        const timeWithDate = { date, time, img: items.img, lab: items.lab, id, name: items.name };
        const isTimeAlreadySelected = selectedTimes.some(t => t.date === date && t.time === time && t.id === id && t.status === 'selected');

        if (isTimeAlreadySelected) {
            const updatedTimes = selectedTimes.map(t =>
                t.date === date && t.time === time && t.id === id
                    ? { ...t, status: 'error' }
                    : t
            );
            setSelectedTimes(updatedTimes);
        } else {
            const updatedTimes = [...selectedTimes, { ...timeWithDate, status: 'selected' }];
            setSelectedTimes(updatedTimes);
            localStorage.setItem('selectedTimes', JSON.stringify(updatedTimes));
        }
    };

    const isSelected = (date, time) => selectedTimes.some(t => t.date === date && t.time === time && t.id === id && t.status === 'selected');
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
        let currentTime = start;

        while (currentTime < end) {
            const nextTime = new Date(currentTime.getTime() + 60 * 60 * 1000);
            times.push(`${currentTime.getHours()}:00 - ${nextTime.getHours()}:00 ${currentTime.getHours() < 12 ? 'AM' : 'PM'}`);
            currentTime = nextTime;
        }

        return times;
    };

    const handleCheckOut = () => {
        const selectedValidTimes = selectedTimes.filter(t => t.status === 'selected' && t.id === id);
        if (selectedValidTimes.length === 0) {
            toast.error('Please select a valid time slot before checking out.');
        } else {
            const updatedTimes = selectedTimes.map(t =>
                t.status === 'selected' && t.id === id
                    ? { ...t, status: 'error' }
                    : t
            );
            setSelectedTimes(updatedTimes);
            localStorage.setItem('selectedTimes', JSON.stringify(updatedTimes));
            navigate("/home");
        }
    };

    const labTimes = generateTimeSlots(new Date(2024, 5, 11, 8), new Date(2024, 5, 11, 16));

    return (
        <>
            <img src={bgImage} className="fixed -z-10 top-0 left-0 h-screen w-screen" alt="backgroundImage" />
            <div className="max-w-[80rem] m-auto py-10 px-10">
                <ToastContainer />
                <div className="">
                    <div className="md:flex justify-between gap-5 text-white px-[3rem] pt-8">
                        <div className="flex flex-col gap-3">
                            <img src={items.img} alt="" />
                            <Card.Text className='pt-2 backdrop-blur-md bg-[#ffffff1a] p-3 pb-2 rounded-md'>{items.description}</Card.Text>
                        </div>
                        <div className="max-w-[36.5rem] w-full flex flex-col">
                            <Card.Text className='pb-2 font-semibold'><u>Lab {items.lab}</u></Card.Text>
                            <p className='w-full border-2 p-1 mb-2 rounded-md border-zinc-100 font-semibold '>Tue, Jun 11th</p>
                            <div className="p-1 pt-2 flex flex-wrap gap-y-6 gap-x-4">
                                {renderTimeSlots('Tue, Jun 11th', labTimes)}
                            </div>
                            <p className='w-full mt-8 border-2 mb-2 p-1 rounded-md border-zinc-100 font-semibold'>Wed, Jun 12th</p>
                            <div className="p-1 pt-2 flex flex-wrap gap-y-6 gap-x-4">
                                {renderTimeSlots('Wed, Jun 12th', labTimes)}
                            </div>
                            <p className='w-full mt-8 border-2 mb-2 p-1 rounded-md border-zinc-100 font-semibold'>Thu, Jun 13th</p>
                            <div className="p-1 pt-2 flex flex-wrap gap-y-6 gap-x-4">
                                {renderTimeSlots('Thu, Jun 13th', labTimes)}
                            </div>
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
