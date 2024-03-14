import Image from 'next/image'
import desktopHero from '/public/new-era-hero.png'
import mobileHero  from '/public/tablet.png'
import { AdaptiveImage } from '../AdaptiveImage/AdaptiveImage'
import styles from './hero50.module.scss'

export const Hero50 = () => {
    return (
        <section className={styles.hero}>
            <div className={styles['hero-content']}>
                <h1><span>A</span> developer <span>space</span> to explore and experiment with ideas.</h1>
                <div className={styles['content-block']}>
                    <div className={styles['content-title']}>
                        <h2>IDEATE</h2>
                    </div>
                    <div className={styles['content-title']}>
                        <h2>PROTOTYPE</h2>
                    </div>
                    <div className={styles['content-title']}>
                        <h2>DEPLOY</h2>
                    </div>
                </div>
            </div>
            <div className={styles['hero-visual']}>
                <AdaptiveImage desktop={desktopHero} mobile={mobileHero} />
            </div>
        </section>
    )
  }