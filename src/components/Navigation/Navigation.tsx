import styles from './navigation.module.scss'
import { SiteLogo } from '../SiteLogo/SiteLogo'
import { Button } from '../Button/Button'

export const Navigation = () => {
    return (
          <div className={styles.nav}>
            <SiteLogo />
            <div className={styles['nav__menu']}>
               <Button type="menu" />
            </div>
        </div>
    )
}