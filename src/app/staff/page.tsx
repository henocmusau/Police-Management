import React from 'react'

export default function page() {
    return (
        <section className='main-padding flex h-full max-h-full overflow-hidden relative'>
            <section className='grow overflow-x-auto md:pr-16'>
                <table className='table-auto min-w-full overflow-x-auto whitespace-nowrap'>
                    <thead className='text-left border-b border-secondary/30 sticky top-0 backdrop-blur'>
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
                Agent Details
            </aside>
        </section>
    )
}
