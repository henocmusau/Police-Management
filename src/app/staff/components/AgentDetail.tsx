'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import User from '@/assets/imgs/user.jpg'
import { CgClose } from 'react-icons/cg'

interface Props {
    isDetailOpen: boolean
    closeDetail: () => void
}

export default function AgentDetail({ isDetailOpen: isOpen, closeDetail }: Props) {
    return (
        <aside className={isOpen ? 'detailBox activeDetailBox' : 'detailBox'}>
            <CgClose onClick={closeDetail} className='w-6 h-6 absolute top-4 right-4 hover:text-third md:hidden' />
            <Image src={User} alt='User Profile Picture' className='object-cover object-center overflow-hidden min-h-10 min-w-10 h-40 w-40 rounded-full' />

            <table className='table-auto min-w-[50%] my-8 overflow-x-auto whitespace-nowrap'>
                <tbody className='divide-y divide-secondary/30'>
                    <tr className='hover:bg-secondary/20 duration-200'>
                        <td className='py-2 pr-8 apitalize'>Firstname</td>
                        <td className='py-2 pr-4 uppercase'>Vincent</td>
                    </tr>
                    <tr className='hover:bg-secondary/20 duration-200'>
                        <td className='py-2 pr-8 apitalize'>Lastname</td>
                        <td className='py-2 pr-4 uppercase'>Chen</td>
                    </tr>
                    <tr className='hover:bg-secondary/20 duration-200'>
                        <td className='py-2 pr-8 apitalize'>Middlename</td>
                        <td className='py-2 pr-4 uppercase'>Masumbukilawu</td>
                    </tr>
                    <tr className='hover:bg-secondary/20 duration-200'>
                        <td className='py-2 pr-8 apitalize'>Age</td>
                        <td className='py-2 pr-4 uppercase'>36</td>
                    </tr>
                    <tr className='hover:bg-secondary/20 duration-200'>
                        <td className='py-2 pr-8 apitalize'>Grade</td>
                        <td className='py-2 pr-4 uppercase'>Commandant</td>
                    </tr>
                    <tr className='hover:bg-secondary/20 duration-200'>
                        <td className='py-2 pr-4 apitalize'>Position</td>
                        <td className='py-2 pr-4 uppercase'>CIAT</td>
                    </tr>
                </tbody>
            </table>
            <Link href={'/staff/125'} className='btn btn-primary px-6'>
                More details
            </Link>
        </aside>
    )
}
