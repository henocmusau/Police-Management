'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { IoIosMenu } from "react-icons/io";

import { navLinks } from '@/utils/constants'
import logo from '@/assets/imgs/logo.svg'
import NavButton from './NavButton'
import CurrentUser from './CurrentUser'

export default function LeftNav() {
    const path = usePathname()
    const [textVisible, setTextVisible] = useState(false)

    const toggleText = () => setTextVisible(p => !p)


    return (
        <nav className='border-r border-slate-500/20 duration-200 flex flex-col basis-1/5 p-4 md:py-12 md:px-12 max-h-screen'>
            <header className='mb-12 duration-300'>
                <Image src={logo} alt='Logo' className='w-full h-8 md:h-12 float-left' />
                <h1 className='text-lg hidden md:block font-semibold md:text-center mt-4'>PncTasker</h1>
            </header>
            <button className='flex items-center justify-center rounded-lg duration-200 bg-third/10 mb-2' onClick={toggleText}>
                <IoIosMenu className='md:hidden text-slate-100 h-6 w-6 text-left' />
            </button>
            <ul className='grow duration-300'>

                {navLinks.map(navlink => (
                    <li key={navlink.link} className='duration-300'>
                        <NavButton
                            label={navlink.label}
                            link={navlink.link}
                            icon={navlink.icon}
                            isActive={path === navlink.link}
                            textVisible={textVisible}
                        />
                    </li>
                ))}
            </ul>

            <CurrentUser />
        </nav>
    )
}
