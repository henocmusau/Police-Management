'use client'
import Link from 'next/link';
import React from 'react'
import { IconType } from 'react-icons';

interface Props {
    label: string;
    link: string;
    icon: IconType;
    isActive?: boolean
    textVisible?: boolean
}

export default function NavButton({ label, link, icon: Icon, isActive, textVisible }: Props) {

    const style = 'md:w-full duration-300 overflow-x-hidden'

    let textStyle = isActive ? style + ' text-slate-100' : style

    return (
        <Link
            href={link}
            className={'navLink group '}
        >
            <Icon className={`md:pr-2 h-6 w-6 md:h-8 md:w-8 group-hover:text-third duration-300 ${isActive ? 'text-slate-100 group-hover:text-slate-100 duration-300 ' : ''}`} />
            <span className={textStyle + (textVisible ? ' w-full pl-2 md:pl-0 duration-300 ' : ' duration-300  w-0')}>{label}</span>
        </Link>
    )
}
