import React from 'react';
import logo from'../../assets/logo.svg';
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { FaToggleOn } from "react-icons/fa";
import { TfiAlignJustify } from "react-icons/tfi";




const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100  px-10 mx-auto">
                <div className="flex-1">
                    <img className='max-w-28' src={logo} alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 items-center text-xl gap-2">
                        <li>
                            <details>
                                <summary>Home</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>LifeStyle</li>
                        <li>
                            <details>
                                <summary>Features</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Post Layout</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>Contact</li>
                        <li><button className='bg-[#636563]  text-white flex items-center gap-2 px-4 py-2 rounded-md'><PiTelegramLogoDuotone className='text-white'></PiTelegramLogoDuotone> join Us</button></li>
                        <CiSearch className='text-5xl border-r pr-4'></CiSearch>
                        <FaToggleOn className='text-4xl'></FaToggleOn>
                        <TfiAlignJustify className='text-3xl ml-2'></TfiAlignJustify>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;