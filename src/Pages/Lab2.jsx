import React, { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { LAB2_DATA } from '../Data/labData';
import { Link, useNavigate } from 'react-router-dom';
import bgImage from "../assets/loginBG.jpg"
import { IoMdArrowRoundBack } from 'react-icons/io';


const Lab2 = () => {
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredData = LAB2_DATA.filter(({ name, description }) => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        return name.toLowerCase().includes(lowerCaseQuery) || description.toLowerCase().includes(lowerCaseQuery);
    });

    return (
        <>
            <img src={bgImage} className="fixed -z-10 top-0 left-0 h-screen w-screen" alt="backgroundImage" />

            <div className="max-w-[80rem] m-auto px-10 py-10">
                <div className="">
                    <div className="flex max-w-[40rem] m-auto p-1 items-center gap-4 border-2 border-zinc-200 rounded-md">
                        <input
                            type="text"
                            className="w-full bg-transparent text-zinc-50 placeholder:text-zinc-300 py-1 pl-2 outline-none"

                            placeholder="search..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <IoSearchSharp className="text-zinc-100 mr-2 text-[1.2rem]" />
                    </div>
                    <div className="pt-10 ">
                        {filteredData.map(({ img, name, description }, index) => (
                            <Link className='no-underline' to={`/product/${name}`}>
                                <div key={index} className="md:flex cursor-pointer select-none hover:bg-[#ffffff25] transition-all duration-300 active:scale-[.99] justify-center gap-10 border-2 border-zinc-200 rounded-md 
                            mb-4 px-2 mx-[3rem] py-2">
                                    <img src={img} className="max-w-[15rem] rounded-md shadow-xl" alt={name} />
                                    <div className="py-1  max-w-[42rem] w-full">
                                        <h2 className="text-lg text-zinc-50  font-bold">{name}</h2>
                                        <p className="text-sm text-zinc-200">{description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex fixed bottom-10 left-5 mt-4">
                <button
                    onClick={() => navigate(-1)}
                    className='bg-zinc-300 text-black px-4 cursor-pointer hover:opacity-80 active:scale-95 font-semibold py-[.7rem] rounded-md transition-all duration-300'
                >
                    <IoMdArrowRoundBack />
                </button>
            </div>
        </>
    );
};

export default Lab2;
