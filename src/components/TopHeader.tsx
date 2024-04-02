import React from 'react'
import { BiSearch } from 'react-icons/bi'
import Button from './Button'
import { PiUserGearFill } from "react-icons/pi";
import { IoNotifications } from "react-icons/io5";

export default function TopHeader() {
    return (
        <header className='flex flex-wrap md:flex-nowrap z-10 w-full mb-8 sticky top-0 backdrop-blur-lg px-8 md:px-16 pt-4 md:pt-16 gap-8 md:gap-2'>
            <div className='grow flex relative items-center order-2 md:order-1 pb-4'>
                <BiSearch className='absolute left-0 w-6 h-6' />
                <input
                    placeholder='Type your search here ...'
                    type='search' name='search'
                    className='searchBar w-full bg-transparent placeholder:text-sm text-sm px-8 outline-none focus:ring-0'
                />
            </div>

            <ul className='flex gap-2 items-center order-1 justify-end md:justify-normal basis-full md:basis-auto'>
                <li>
                    <Button icon={PiUserGearFill} type='icon' />
                </li>
                <li>
                    <Button icon={IoNotifications} type='icon' />
                </li>
                <li>
                    <Button text='New' type='primary' />
                </li>
            </ul>
        </header>
    )
}
