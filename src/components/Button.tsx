import React from 'react'
import { IconType } from 'react-icons'

interface Props {
    type?: 'primary' | 'secondary' | 'danger' | 'warning' | 'outlined' | 'icon'
    text?: string
    icon?: IconType
    additionalStyle?: string
}

export default function Button({ type = 'primary', text, icon: Icon, additionalStyle = '' }: Props) {
    const style = type === 'icon' ? 'btn btn-icon btn-outlined' : `${additionalStyle} btn btn-${type} px-6`

    return (
        <button className={style}>
            {Icon ? <Icon /> : null}
            {text ? <span>{text}</span> : null}
        </button>
    )
}
