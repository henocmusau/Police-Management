import Image from 'next/image'
import React from 'react'

import User from '@/assets/imgs/user.jpg'

export default function CurrentUser() {
    return (
        <footer className='flex flex-col items-center'>
            <Image src={User} alt='User Profile Picture' className='rounded-full h-16 w-16 object-cover object-center' />
            <h2 className='text-slate-100 mt-2'>John Doe</h2>
            <p className='text-sm'>johndoe@email.com</p>
        </footer>
    )
}
