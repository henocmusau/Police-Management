import Image from 'next/image'
import React from 'react'

import User from '@/assets/imgs/user.jpg'
import Link from 'next/link'

export default function CurrentUser() {
    return (
        <footer className='flex flex-col items-center duration-300'>
            <Link className='overflow-hidden h-10 w-10 md:h-16 md:w-16 rounded-full duration-300' href={'/profile'}>
                <Image src={User} alt='User Profile Picture' className='w-full h-full object-cover object-center duration-300 ' />
            </Link>
            <Link href={'/profile'} className='text-slate-100 mt-2 hidden md:block'>John Doe</Link>
            <p className='text-sm hidden md:block'>johndoe@email.com</p>
        </footer>
    )
}
