"use client"
import { useContext } from 'react'
import styles from "./button.module.scss"
import { OverLayContext, Test } from '@/app/page'

interface ButtonProps {
    type: "menu" | 'exit'
}

export const Button:React.FC<ButtonProps> = ({ type } : ButtonProps) => {
    const { state, dispatch } = useContext(OverLayContext) as Test;
    
    return (
         <button className={`${styles.btn} ${type === 'menu' ? styles['btn-menu'] : styles['btn-exit']}`} onClick={() => dispatch(!state)}></button>
    )
}