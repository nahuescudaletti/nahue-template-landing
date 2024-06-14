"use client"

import Image from "next/image"
import { RiMenu3Line } from 'react-icons/ri'
import { dataHeader } from "./Header.data"
import { useState } from "react"
import { MotionTransition } from "../MotionTransition/"

export function Header() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    return (
        <MotionTransition>
            <nav className="flex flex-wrap items-center justify-between max-w-5xl p-4 mx-auto md:py-8">
                <div className="flex items-center cursor-pointer">
                    <Image src="/assets/PE_logo_white_1_.svg" width="200" height="100" alt="Logo Bank" />
                </div>
                <RiMenu3Line className="block text-3xl md:hidden cursor-pointer" onClick={() => setOpenMobileMenu(!openMobileMenu)} />
                <div className={`${openMobileMenu ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
                    <div className="flex flex-col p-4 mt-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        {dataHeader.map(({ id, name, idLink }) => (
                            <div key={id} className="px-4 transition-all duration-500 ease-in-out cursor-pointer">
                                <a href={idLink} className="group hover:bg-gray-100 hover:bg-opacity-10 rounded-full px-3 py-2 text-orange-light group-hover:text-orange hover:text-orange-500">{name}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </nav>
        </MotionTransition>
    )
}
