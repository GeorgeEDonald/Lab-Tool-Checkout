import React from 'react';
import { IoMdPerson } from 'react-icons/io';  // Import the profile icon
import { Link, useNavigate } from 'react-router-dom';
import bgImage from "../assets/loginBG.jpg";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" fixed top-6 right-10 z-10 flex items-center justify-end ">
        <IoMdPerson onClick={() => navigate("/account")} className='text-[2.5rem] cursor-pointer text-zinc-100 transition-all hover:scale-110' />
      </div>
      <img src={bgImage} className="fixed -z-10 top-0 left-0 h-screen w-screen" alt="backgroundImage" />
      <div className="min-h-[100vh] flex items-center justify-center">
        <div className="max-w-2xl w-full p-8 bg-white shadow-lg rounded-lg">
          <p className='text-gray-500 text-lg mb-6'>Choose Your Lab</p>
          <div className="space-y-4 flex flex-col">
            <Link to={"/lab1"} className='no-underline text-[#212529]'>
              <div className="lab1 cursor-pointer flex active:scale-[.99] select-none transition-all justify-between items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors">
                <p className="text-xl mb-0  font-semibold">LAB 1</p>
                <p className="mb-0 text-gray-600 ">Room E201</p>
              </div>
            </Link>
            <Link to={"/lab2"} className='no-underline text-[#212529]'>
              <div className="lab2 cursor-pointer flex justify-between active:scale-[.99] select-none transition-all items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors">
                <p className="mb-0 text-xl font-semibold">LAB 2</p>
                <p className="mb-0 text-gray-600">Room E202</p>
              </div>
            </Link>
            <Link to={"/lab3"} className='no-underline text-[#212529]'>
              <div className="lab3 cursor-pointer flex justify-between active:scale-[.99] select-none transition-all items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors">
                <p className="mb-0 text-xl font-semibold">LAB 3</p>
                <p className="mb-0 text-gray-600">Room E205</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
