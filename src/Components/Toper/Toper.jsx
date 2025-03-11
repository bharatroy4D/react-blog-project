import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter, FaTelegram, } from 'react-icons/fa6';

const Toper = () => {
    return (
        <div className='bg-gradient-to-r from-purple-500 to-pink-500 '>
            <div className="flex justify-between items-center w-10/12 mx-auto py-2">
                <div>
                    <ul className='flex gap-3 items-center  text-xl text-white'>
                        <a href=""><FaLinkedin></FaLinkedin></a>
                        <a href=""><FaSquareXTwitter></FaSquareXTwitter></a>
                        <a href=""><FaSquareInstagram></FaSquareInstagram></a>
                        <a href=""><FaTelegram></FaTelegram></a>
                    </ul>
                </div>
                <div>
                    <ul className="flex  gap-6 text-white">
                        <li><a>About us -</a></li>
                        <li><a>OurStroy -</a></li>
                        <li><a>Projects</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Toper;