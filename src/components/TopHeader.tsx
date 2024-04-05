'use client'
import React, { useState } from 'react'
import { BiSearch, BiUserPlus } from 'react-icons/bi'
import Button from './Button'
import { PiUserGearFill } from "react-icons/pi";
import { IoNotifications } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import MainModalWrapper from './Modal/MainModalWrapper';
import { BsHousesFill } from 'react-icons/bs';

export default function TopHeader() {
    const [openMainModal, setOpenMainModal] = useState(false)
    const [searchModal, setSearchModal] = useState(false)

    const closeModal = () => setOpenMainModal(false)
    const openModal = () => setOpenMainModal(true)

    const closeSearchModal = () => setSearchModal(false)
    const openSearchModal = () => setSearchModal(true)

    return (
        <>
            <header className='flex justify-end z-10 w-full mb-8 sticky top-0 backdrop-blur-lg px-8 md:px-16 pt-4 md:pt-16 gap-8 md:gap-2'>
                <ul className='flex gap-2 items-center order-1 justify-end md:justify-normal basis-full md:basis-auto'>
                    <li>
                        <Button icon={BiSearch} type='base' handleClick={openSearchModal} />
                    </li>
                    <li>
                        <Button icon={PiUserGearFill} type='icon' />
                    </li>
                    <li>
                        <Button icon={IoNotifications} type='icon' />
                    </li>
                    <li>
                        <Button text='New' type='primary' handleClick={openModal} />
                    </li>
                </ul>
            </header>
            <MainModalWrapper title='Create new' isOpen={openMainModal} closeModal={closeModal}>
                <ul className="my-6 flex flex-col gap-4">
                    <li className="text-sm text-slate-400 bg-indigo-800/10 duration-300 hover:bg-indigo-800/20 p-4 rounded-lg">
                        <button className='flex gap-4'>
                            <BiUserPlus className='basis-[25%] h-auto text-fourth/30' />
                            <div className='text-left'>
                                <h3 className='basis-full text-lg font-semibold text-fourth'>Officer</h3>
                                <span className='text-sm text-slate-500'>Start adding new Officer by providing required informations</span>
                            </div>
                        </button>
                    </li>
                    <li className="text-sm text-slate-400 bg-indigo-800/10 duration-300 hover:bg-indigo-800/20 p-4 rounded-lg">
                        <button className='flex gap-4'>
                            <BsHousesFill className='basis-[25%] h-auto text-fourth/30' />
                            <div className='text-left'>
                                <h3 className='basis-full text-lg font-semibold text-fourth'>Position</h3>
                                <span className='text-sm text-slate-500'>Start adding new Position by providing required details</span>
                            </div>
                        </button>
                    </li>
                </ul>
            </MainModalWrapper>

            <MainModalWrapper isOpen={searchModal} closeModal={closeSearchModal}>
                <div className='grow flex items-center order-2 md:order-1 pb-4 sticky backdrop-blur-lg top-0'>
                    <BiSearch className='absolute left-4 w-4 h-4' />
                    <input
                        placeholder='Type here...'
                        type='search'
                        name='search'
                        className='searchBar rounded-lg border border-third outline-none w-full bg-transparent text-sm px-10 py-2 focus:ring-0'

                    />
                </div>
            </MainModalWrapper>
        </>
    )
}
