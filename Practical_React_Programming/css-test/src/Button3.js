import React from 'react'
import style from './Button3.module.scss'
import cn from 'classnames'

function Button1({ size }) {
    if ( size === 'big'){
        return <button className={cn(style.button, style.big)}>큰 버튼</button>
    } else {
        return <button className={cn(style.button, style.small)}>작은</button>
    }
}

export default Button1
console.log(style)
