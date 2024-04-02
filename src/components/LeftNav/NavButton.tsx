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
            <Icon className='pr-2 h-8 w-8 group-hover:text-indigo-500 duration-150' />
            <span className={isActive ? 'text-slate-100' : ''}>{label}</span>
        </Link>
    )
}
