import Image from 'next/image'
import React from 'react'

import User from '@/assets/imgs/user.jpg'

export default function CurrentUser() {
    return (
        <footer className='flex flex-col items-center'>
            <Image src={User} alt='User Profile Picture' className='rounded-full h-10 w-full md:h-16 md:w-16 object-cover object-center' />
            <h2 className='text-slate-100 mt-2 hidden md:block'>John Doe</h2>
            <p className='text-sm hidden md:block'>johndoe@email.com</p>
        </footer>
    )
}
