import React from 'react'
import { BiSearch } from 'react-icons/bi'
import Button from './Button'
import { PiUserGearFill } from "react-icons/pi";
import { IoNotifications } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

export default function TopHeader() {
    return (
        <header className='flex justify-end z-10 w-full mb-8 sticky top-0 backdrop-blur-lg px-8 md:px-16 pt-4 md:pt-16 gap-8 md:gap-2'>
            <ul className='flex gap-2 items-center order-1 justify-end md:justify-normal basis-full md:basis-auto'>
                <li>
                    <Button icon={BiSearch} type='base' />
                </li>
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
