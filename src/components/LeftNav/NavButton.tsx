import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { IconType } from 'react-icons';

interface Props {
    label: string;
    link: string;
    icon: IconType;
    isActive?: boolean
}

export default function NavButton({ label, link, icon: Icon, isActive }: Props) {
    return (
        <Link
            href={link}
            className={'navLink group '}
        >
            <Icon className='md:pr-2 h-6 w-6 md:h-8 md:w-8 group-hover:text-third duration-150' />
            <span className={isActive ? 'hidden md:block text-slate-100' : 'hidden md:block '}>{label}</span>
        </Link>
    )
}
