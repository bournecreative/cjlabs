"use client"
import { useContext } from 'react'
import styles from "./button.module.scss"
import { OverLayContext,  OverlayContextType} from '@/Contexts/OverlayContext'

interface ButtonProps {
    type: "menu" | 'exit'
}

export const Button:React.FC<ButtonProps> = ({ type } : ButtonProps) => {
    const { state, dispatch } = useContext(OverLayContext) as OverlayContextType;
    
    return (
         <button className={`${styles.btn} ${type === 'menu' ? styles['btn-menu'] : styles['btn-exit']}`} onClick={() => dispatch(!state)}></button>
    )
}