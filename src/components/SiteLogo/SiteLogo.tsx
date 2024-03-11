import Image from 'next/image'
import siteLogo from '/public/christianjohnlabs-logo.svg'
import styles from './sitelogo.module.scss'

export const SiteLogo = () =>  {
    return (
        <div className={styles.site__logo}>
            <Image priority src={siteLogo} alt="christian john labs logo"/>
        </div>
    )
}