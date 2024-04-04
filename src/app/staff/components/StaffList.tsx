import React from 'react'

interface Props {
    openDetail: () => void
}

export default function StaffList({ openDetail }: Props) {
    return (
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
                {Array(31).fill(1).map((_, i) => (
                    <tr onClick={openDetail} key={i} className='hover:bg-secondary/20 duration-200'>
                        <td className='py-4 pr-4 pl-4 capitalize'>kkkkkk Muanangani justin</td>
                        <td className='py-4 pr-4 uppercase'>Cmd</td>
                        <td className='py-4 pr-4 uppercase'>ADChef</td>
                        <td className='py-4 uppercase'>CIAT</td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}
