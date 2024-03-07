/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../assets/LOGO.png';
import Search from './Search';
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    return (
        <div>
            <nav className="bg-slate-100 shadow-md">
            <div
                className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3"
            >
                <a href="/">
                    <img
                        className="h-10"
                        src={logo}
                        alt="M-Application"
                    />
                </a>
                <div
                    className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
                >
                    <Search/>
                    <CiSearch className='text-xl'/>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;