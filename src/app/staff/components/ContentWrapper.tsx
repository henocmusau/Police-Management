'use client'
import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'

import StaffList from './StaffList'
import AgentDetail from './AgentDetail'
import useOfficersFilter from '@/hooks/useOfficersFilter'
import { policeOfficers } from '@/utils/constants'


export default function ContentWrapper() {
    const [isDetailOpen, setIsDetailOpen] = useState(false)
    const { onInputChange, filteredOfficers } = useOfficersFilter(policeOfficers)

    const openDetail = () => {
        setIsDetailOpen(true)
    }

    const closeDetail = () => {
        if (!isDetailOpen) return
        setIsDetailOpen(false)
    }

    return (
        <>
            <section className='grow overflow-x-auto md:pr-16 relative'>

                <div className='grow flex items-center order-2 md:order-1 pb-4 sticky backdrop-blur-lg top-0'>
                    <BiSearch className='absolute left-4 w-4 h-4' />
                    <input
                        placeholder='Type your search here ...'
                        type='search' name='search'
                        onChange={onInputChange}
                        className='searchBar w-full bg-transparent placeholder:text-xs text-sm px-10 outline-none focus:ring-0'
                    />
                </div>
                <p className='md:hidden text-xxs px-4 italic text-third'>Click a row to view more details about the selected agent</p>
                <StaffList openDetail={openDetail} officers={filteredOfficers()} />

            </section>

            {/* AGENT DETAILS */}
            <AgentDetail isDetailOpen={isDetailOpen} closeDetail={closeDetail} />
        </>
    )
}
