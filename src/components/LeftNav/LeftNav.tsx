'use client'
import { navLinks } from '@/utils/constants'
import React from 'react'
import NavButton from './NavButton'
import Image from 'next/image'

import logo from '@/assets/imgs/logo.svg'
import CurrentUser from './CurrentUser'
import { usePathname } from 'next/navigation'

export default function LeftNav() {
    const path = usePathname()

    return (
        <nav className='border-r border-slate-500/20 flex flex-col basis-1/5 p-12'>
            <header className='mb-12'>
                <Image src={logo} alt='Logo' className='w-full h-12' />
                <h1 className='text-xl font-semibold text-center mt-4'>PncTasker</h1>
            </header>
            <ul className='grow'>
                {navLinks.map(navlink => (
                    <li key={navlink.link}>
                        <NavButton
                            label={navlink.label}
                            link={navlink.link}
                            icon={navlink.icon}
                            isActive={path === navlink.link}
                        />
                    </li>
                ))}
            </ul>

            <CurrentUser />
        </nav>
    )
}
