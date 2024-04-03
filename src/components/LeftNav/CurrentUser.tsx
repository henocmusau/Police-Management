import Image from 'next/image'
import React from 'react'

import User from '@/assets/imgs/user.jpg'
import Link from 'next/link'

export default function CurrentUser() {
    return (
        <footer className='flex flex-col items-center'>
            <Link className='overflow-hidden min-h-10 min-w-10 md:h-16 md:w-16 rounded-full' href={'/profile'}>
                <Image src={User} alt='User Profile Picture' className='w-full h-full object-cover object-center' />
            </Link>
            <Link href={'/profile'} className='text-slate-100 mt-2 hidden md:block'>John Doe</Link>
            <p className='text-sm hidden md:block'>johndoe@email.com</p>
        </footer>
    )
}
