'use client'
import React from 'react'
import { IconType } from 'react-icons'

interface Props {
    type?: 'primary' | 'secondary' | 'danger' | 'warning' | 'outlined' | 'icon' | 'base'
    text?: string
    icon?: IconType
    additionalStyle?: string
    handleClick?: () => void
}

export default function Button({ type = 'primary', text, icon: Icon, additionalStyle = '', handleClick }: Props) {
    const style = type === 'icon' ? 'btn btn-icon btn-outlined flex' : `${additionalStyle} btn btn-${type} px-6 flex`

    return (
        <button className={style} onClick={handleClick}>
            {Icon ? <Icon className={`h-max btnIcon ${type !== 'icon' && type !== 'base' ? ' absolute left-1' : ''}`} /> : null}
            {text ? <span className='text-center w-full'>{text}</span> : null}
        </button>
    )
}
