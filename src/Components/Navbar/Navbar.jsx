import React from 'react';
import logo from'../../assets/logo.svg';
import { PiTelegramLogoDuotone } from "react-icons/pi";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100  w-10/12 mx-auto">
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
                        <li><button className='bg-[#636563]'><PiTelegramLogoDuotone></PiTelegramLogoDuotone> join Us</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;