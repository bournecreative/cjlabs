import Image from 'next/image'
import "./globals.css";
import styles from "./page.module.scss"
import heroImage from '../../public/new-era-hero.png'

export default function Home() {
  return (
    <main>
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
        <div className={styles.hero__visual}>
          <Image className={styles.hero__img} src={heroImage} alt="vector illustration of an astronaut holding a keyboard" sizes="(max-width: 768px) 10vw" priority/>
        </div>
      </section>
    </main>
  );
}
