'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import User from '@/assets/imgs/user.jpg'
import { CgClose } from 'react-icons/cg'
import { policeOfficer } from '@/types'
import { BiArrowBack } from 'react-icons/bi'

interface Props {
    closeDetail: () => void
    activeOfficer: policeOfficer | null
}

export default function AgentDetail({ closeDetail, activeOfficer }: Props) {

    return (
        <>
            {activeOfficer ? <aside className={activeOfficer ? 'detailBox activeDetailBox' : 'detailBox'}>
                <CgClose onClick={closeDetail} className='w-6 h-6 absolute top-4 right-4 hover:text-third md:hidden' />
                <Image src={User} alt='User Profile Picture' className='object-cover object-center overflow-hidden min-h-40 min-w-40  h-40 w-40 rounded-full' />

                <table className='table-auto min-w-[50%] my-8 overflow-x-auto whitespace-nowrap'>
                    <tbody className='divide-y divide-secondary/30'>
                        <tr className='hover:bg-secondary/20 duration-200'>
                            <td className='py-2 pr-8 capitalize'>Firstname</td>
                            <td className='py-2 pr-4 capitalize font-semibold text-fourth'>{activeOfficer?.firstname}</td>
                        </tr>
                        <tr className='hover:bg-secondary/20 duration-200'>
                            <td className='py-2 pr-8 capitalize'>Lastname</td>
                            <td className='py-2 pr-4 capitalize font-semibold text-fourth'>{activeOfficer?.lastname}</td>
                        </tr>
                        <tr className='hover:bg-secondary/20 duration-200'>
                            <td className='py-2 pr-8 capitalize'>Middlename</td>
                            <td className='py-2 pr-4 capitalize font-semibold text-fourth'>{activeOfficer?.middlename}</td>
                        </tr>
                        <tr className='hover:bg-secondary/20 duration-200'>
                            <td className='py-2 pr-8 capitalize'>Age</td>
                            <td className='py-2 pr-4 uppercase font-semibold text-fourth'>{activeOfficer?.age}</td>
                        </tr>
                        <tr className='hover:bg-secondary/20 duration-200'>
                            <td className='py-2 pr-8 apitalize'>Grade</td>
                            <td className='py-2 pr-4 uppercase font-semibold text-fourth'>{activeOfficer?.rank}</td>
                        </tr>
                        <tr className='hover:bg-secondary/20 duration-200'>
                            <td className='py-2 pr-4 apitalize'>Position</td>
                            <td className='py-2 pr-4 uppercase font-semibold text-fourth'>{activeOfficer?.position}</td>
                        </tr>
                    </tbody>
                </table>

                <Link href={'/staff/' + activeOfficer?.id} className='btn btn-primary px-6'>
                    More details
                </Link>
            </aside>
                : <aside className='detailBox flex flex-col items-center justify-center text-center'>
                    <BiArrowBack className='block text-4xl mb-4 animate-bounceLeft' />
                    <p className='text-third'>Please, select an officer to view details.</p>
                </aside>
            }
        </>
    )
}
