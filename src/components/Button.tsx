import React from 'react'
import { IconType } from 'react-icons'

interface Props {
    type?: 'primary' | 'secondary' | 'danger' | 'warning' | 'outlined' | 'icon' | 'base'
    text?: string
    icon?: IconType
    additionalStyle?: string
}

export default function Button({ type = 'primary', text, icon: Icon, additionalStyle = '' }: Props) {
    const style = type === 'icon' ? 'btn btn-icon btn-outlined flex' : `${additionalStyle} btn btn-${type} px-6 flex`

    return (
        <button className={style}>
            {Icon ? <Icon className={`h-max btnIcon ${type !== 'icon' && type !== 'base' ? ' absolute left-1' : ''}`} /> : null}
            {text ? <span>{text}</span> : null}
        </button>
    )
}
