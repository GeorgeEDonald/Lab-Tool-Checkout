import React, { useContext, useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userContext } from '../Context/LoginContext';
import bgImage from "../assets/loginBG.jpg"

const Account = () => {
    const { formData } = useContext(userContext);  
    const [selectedTimes, setSelectedTimes] = useState([]);
    const [timesToReturn, setTimesToReturn] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedTimes = JSON.parse(localStorage.getItem('selectedTimes')) || [];
        setSelectedTimes(storedTimes);
    }, []);

    const handleTimeClick = (date, time, lab, img, name) => {
        const timeIdentifier = `${date}-${time}-${lab}-${img}-${name}`;
        if (timesToReturn.includes(timeIdentifier)) {
            setTimesToReturn(timesToReturn.filter(t => t !== timeIdentifier));
        } else {
            setTimesToReturn([...timesToReturn, timeIdentifier]);
        }
    };

    const handleReturnEarly = () => {
        if (timesToReturn.length === 0) {
            toast.error("Please select items to return");
            return;
        }
        const updatedTimes = selectedTimes.filter(timeObj => !timesToReturn.includes(`${timeObj.date}-${timeObj.time}-${timeObj.lab}-${timeObj.img}-${timeObj.name}`));
        localStorage.setItem('selectedTimes', JSON.stringify(updatedTimes));
        setSelectedTimes(updatedTimes);
        setTimesToReturn([]);
        toast.success("Successfully removed");
    };

    const isTimeSelected = (date, time, lab, img, name) => timesToReturn.includes(`${date}-${time}-${lab}-${img}-${name}`);

    return (
        <>
            <img src={bgImage} className="fixed -z-10 top-0 left-0 h-screen w-screen" alt="backgroundImage" />
            <ToastContainer />
            <div className="max-w-[80rem] m-auto px-10">
                <div className="">
                    <div className="flex mt-4">
                        <button className='bg-zinc-700 text-white px-5 cursor-pointer hover:opacity-80 active:scale-95 font-semibold py-[.7rem] rounded-md transition-all duration-300'>
                            Account
                        </button>
                    </div>
                    <div className="max-w-[40rem] pt-10 m-auto">
                        <Card.Text className='text-center text-white tracking-wider	 font-semibold text-xl pb-2'>
                            {formData.username ? formData.username : "User0001"}
                        </Card.Text>
                        <Card.Text className='text-center border-2 mb-10 text-white border-zinc-200 rounded-md p-2'>Current Check-Outs</Card.Text>
                        {selectedTimes.map((timeObj, index) => (
                            <div key={index} className='flex justify-center mb-3 gap-2 items-center'>
                                <img src={timeObj.img} alt="" className='w-28 pr-1 pt-4 rounded-md' />
                                <div className='w-full'>
                                    <Card.Text className='pb-1 text-white font-semibold'>{`Lab ${timeObj.lab}`}</Card.Text>
                                    <Card.Text
                                        className={`text-center text-white border-2 border-zinc-200 rounded-md w-full p-4 active:scale-[.99] transition-all cursor-pointer ${isTimeSelected(timeObj.date, timeObj.time, timeObj.lab, timeObj.img, timeObj.name) ? 'bg-red-500 text-white' : ''}`}
                                        onClick={() => handleTimeClick(timeObj.date, timeObj.time, timeObj.lab, timeObj.img, timeObj.name)}
                                    >
                                        {timeObj.date}
                                        <br />
                                        {timeObj.time}
                                        <br />
                                        {timeObj.name}
                                    </Card.Text>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex fixed bottom-10 right-10 mt-4">
                <button
                    onClick={handleReturnEarly}
                    className='bg-zinc-700 text-white px-5 cursor-pointer hover:opacity-80 active:scale-95 font-semibold py-[.7rem] rounded-md transition-all duration-300'
                >
                    Return Early
                </button>
            </div>
            <div className="flex fixed bottom-10 left-10 mt-4">
                <button
                    onClick={() => navigate(-1)}
                    className='bg-zinc-700 text-white px-4 cursor-pointer hover:opacity-80 active:scale-95 font-semibold py-[.7rem] rounded-md transition-all duration-300'
                >
                    <IoMdArrowRoundBack />
                </button>
            </div>
        </>
    );
};

export default Account;
