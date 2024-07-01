"use client";

import Image from "next/image";
import { RiMenu3Line } from 'react-icons/ri';
import { IoIosArrowDown } from 'react-icons/io';
import { dataHeader } from "./Header.data";
import { useState } from "react";
import { MotionTransition } from "../MotionTransition/";
import { getBasePath } from "@/utils/utils";
import { Reveal } from "../Reveal";
import { DataDropDown } from "./DropDown.data";

export function Header() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [openProductDropdown, setOpenProductDropdown] = useState(false);

    const toggleMobileMenu = () => {
        setOpenMobileMenu(!openMobileMenu);
        setOpenProductDropdown(false);
    };

    const toggleProductDropdown = () => {
        setOpenProductDropdown(!openProductDropdown);
    };

    return (
        <MotionTransition>
            <nav className="flex flex-wrap items-center justify-between max-w-10xl p-4 mx-auto md:py- bg-transparent">
                <div className="flex items-center cursor-pointer p-2">
                    <Image src={`${getBasePath()}/assets/PE_icon_black__.png`} width="40" height="100" alt="Logo Bank" />
                </div>
                <RiMenu3Line className="block text-3xl md:hidden cursor-pointer" onClick={toggleMobileMenu} />
                <div className={`${openMobileMenu ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
                    <div className="flex flex-col p-4 mt-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <div className="relative px-4 transition-all duration-500 ease-in-out cursor-pointer">
                            <div className="group">
                                <button className="group flex items-center hover:bg-gray-100 hover:bg-opacity-10 rounded-full px-3 py-2 text-orange-light group-hover:text-orange hover:text-orange-500" onClick={toggleProductDropdown}>
                                    <span>Products</span> 
                                    <IoIosArrowDown className={`ml-1 ${openProductDropdown ? 'transform rotate-180' : ''}`} />
                                </button>
                                <div className={`${openProductDropdown ? 'block' : 'hidden'} absolute left-0 mt-2 w-48 bg-black rounded-lg shadow-lg z-10`}>
                                    <div className="py-1">
                                        {DataDropDown.map(({ id, name, idLink }) => (
                                            <a key={id} href={idLink} className="block px-4 py-2 text-white-800 hover:bg-orange-500 hover:text-black" onClick={toggleMobileMenu}>{name}</a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {dataHeader.slice(1).map(({ id, name, idLink }) => (
                            <div key={id} className="px-4 transition-all duration-500 ease-in-out cursor-pointer flex items-center">
                                <a href={idLink} className="group hover:bg-gray-100 hover:bg-opacity-10 rounded-full px-3 py-2 text-orange-light group-hover:text-orange hover:text-orange-500" onClick={toggleMobileMenu}>{name}</a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hidden md:flex lg:flex items-center cursor-pointer mr-10 lg:pr-10">
                </div>
            </nav>
        </MotionTransition>
    );
}