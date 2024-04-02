import React from 'react'
import { BiSearch } from 'react-icons/bi'
import Button from './Button'
import { PiUserGearFill } from "react-icons/pi";
import { IoNotifications } from "react-icons/io5";

export default function TopHeader() {
    return (
        <header className='flex w-full mb-8'>
            <div className='grow flex relative items-center'>
                <BiSearch className='absolute left-0 w-6 h-6' />
                <input
                    placeholder='Type your search here ...'
                    type='search' name='search'
                    className='searchBar bg-transparent placeholder:text-sm ml-8 outline-none focus:ring-0'
                />
            </div>

            <ul className='flex gap-2 items-center'>
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
