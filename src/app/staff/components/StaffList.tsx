import { policeOfficer } from '@/types'
import React from 'react'

interface Props {
    openDetail: () => void
    officers: policeOfficer[]
}

export default function StaffList({ openDetail, officers }: Props) {
    return (
        <table className='table-auto min-w-full overflow-x-auto whitespace-nowrap'>
            <thead className='text-left border-b border-secondary/30'>
                <tr>
                    <th className='py-4 pl-4 pr-4'>Fullname</th>
                    <th className='py-4 pr-4'>Function</th>
                    <th className='py-4 pr-4'>Rank</th>
                    <th className='py-4 pr-4'>Position</th>
                </tr>
            </thead>

            <tbody className='divide-y divide-secondary/30 '>
                {officers.map((officer) => (
                    <tr onClick={openDetail} key={officer.id} className='hover:bg-secondary/20 duration-200'>
                        <td className='py-4 pr-4 pl-4 capitalize'>{`${officer.firstname} ${officer.lastname} ${officer.lastname}`}</td>
                        <td className='py-4 pr-4 uppercase'>{officer.function}</td>
                        <td className='py-4 pr-4 uppercase'>{officer.rank}</td>
                        <td className='py-4 uppercase'>{officer.position}</td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}
