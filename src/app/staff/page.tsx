import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

import User from '@/assets/imgs/user.jpg'
import Button from '@/components/Button'

export default function page() {
    return (
        <section className='main-padding flex h-full max-h-full overflow-hidden relative'>
            <section className='grow overflow-x-auto md:pr-16 relative'>

                <div className='grow flex items-center order-2 md:order-1 pb-4 sticky backdrop-blur-lg top-0'>
                    <BiSearch className='absolute left-4 w-4 h-4' />
                    <input
                        placeholder='Type your search here ...'
                        type='search' name='search'
                        className='searchBar w-full bg-transparent placeholder:text-xs text-sm px-10 outline-none focus:ring-0'
                    />
                </div>

                <table className='table-auto min-w-full overflow-x-auto whitespace-nowrap'>
                    <thead className='text-left border-b border-secondary/30'>
                        <tr>
                            <th className='py-4 pl-4 pr-4'>Nom complet</th>
                            <th className='py-4 pr-4'>Fonction</th>
                            <th className='py-4 pr-4'>Grade</th>
                            <th className='py-4 pr-4'>Poste</th>
                        </tr>
                    </thead>

                    <tbody className='divide-y divide-secondary/30 '>
                        {Array(31).fill(1).map((item) => (
                            <tr key={item} className='hover:bg-secondary/20 duration-200'>
                                <td className='py-4 pr-4 pl-4 capitalize'>kkkkkk Muanangani justin</td>
                                <td className='py-4 pr-4 uppercase'>Cmd</td>
                                <td className='py-4 pr-4 uppercase'>ADChef</td>
                                <td className='py-4 uppercase'>CIAT</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </section>

            {/* AGENT DETAILS */}
            <aside className='min-h-[40%] max-h-[70%] basis-[35%] hidden md:flex flex-col items-center justify-center border-l border-slate-500/20'>
                <Image src={User} alt='User Profile Picture' className='w-full h-full object-cover object-center overflow-hidden min-h-10 min-w-10 md:h-40 md:w-40 rounded-full' />
                {/* <h2 className='text-slate-100 mt-4 text-lg font-semibold'>John Doe</h2>
                <p className='text-sm'>Commandant CIAT</p> */}
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
        </section>
    )
}
