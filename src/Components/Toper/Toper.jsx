import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter, FaTelegram, } from 'react-icons/fa6';

const Toper = () => {
    return (
        <div className='h-14 bg-gradient-to-r from-purple-500 to-pink-500'>
            <div className="flex justify-between items-center w-10/12 mx-auto">
                <div className="flex gap-2 text-2xl">
                    <a href=""><FaLinkedin></FaLinkedin></a>
                    <a href=""><FaSquareXTwitter></FaSquareXTwitter></a>
                    <a href=""><FaSquareInstagram></FaSquareInstagram></a>
                    <a href=""><FaTelegram></FaTelegram></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Link</a></li>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Toper;