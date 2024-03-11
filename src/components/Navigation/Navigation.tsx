import styles from './navigation.module.scss'
import { SiteLogo } from '../SiteLogo/SiteLogo'
import { NavigationButton } from '../NavigationButton/NavigationButton'

export const Navigation = () => {
    return (
          <div className={styles.nav}>
            <SiteLogo />
            <div className={styles['nav__menu']}>
               <NavigationButton />
            </div>
        </div>
    )
}