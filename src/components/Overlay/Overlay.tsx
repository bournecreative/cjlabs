"use client"
import { useContext } from 'react'
import { Button } from '@/components/Button/Button'
import { OverLayContext, Test } from '../../app/page'
import styles from './overlay.module.scss'

export const Overlay = () => {
    const { state } = useContext(OverLayContext) as Test;
    
    return (
         <section className={`${state ? styles['overlay-active'] : styles.overlay}`}>
            <div className={styles['overlay-nav']}>
                <Button type='exit'></Button>
            </div>
            <div className={styles['overlay-content']}>
                <h2>Hello. My Name is Christian John Gonzalez.</h2>
                <p className={`${styles['visual']}`}>christianjohnlabs.com</p>
                <p className='roboto'>I&apos;m a developer and I&apos;ve started this site to be a physical workspace where i can work out ideas and deploy them. The end goal is to
                highlight my skills by sharing projects and case studies based on prior experiences or new revelations. I&apos;ve just deployed this site so its a bit empty. But that&apos;s the beauty of working
                iterately - you build and push out products in iterations and build momentum. Thanks for stopping by and come back soon.</p>
                <div className={styles.skills}>
                    <p className='roboto'>Over the years I developed many skills related to building web applications. Some more applicable in today&apos;s current market.</p>
                    <ul className={`${styles['skill-grid']} roboto`}>
                        <li className={styles.dev}>JavaScript</li>
                        <li className={styles.dev}>Node</li>
                        <li className={styles.dev}>React</li>
                        <li className={styles.dev}>TypeScript</li>
                        <li className={styles.dev}>JQuery</li>
                        <li className={styles.dev}>Ractive</li>
                        <li className={styles.dev}>Python</li>
                        <li className={styles.dev}>Django</li>
                        <li className={styles.dev}>Jest</li>
                        <li className={styles.dev}>SQL</li>
                        <li className={styles.dev}>PHP</li>
                        <li className={styles.dev}>Redux</li>
                        <li className={styles.dev}>MobX</li>
                        <li className={styles.dev}>Java</li>
                        <li className={styles.dev}>Maven</li>
                        <li className={styles.dev}>Git</li>
                        <li className={styles['dev-tools']}>GitHub actions CI/CD</li>
                        <li className={styles['dev-tools']}>Webpack config</li>
                        <li className={styles['dev-tools']}>Developer tooling configuration</li>
                        <li className={styles['dev-tools']}>Adobe Experience Manager</li>
                        <li className={styles['dev-tools']}>AEM component creation</li>
                        <li className={styles['dev-tools']}>Tableau</li>
                        <li className={styles['dev-tools']}>Jira</li>
                        <li className={styles.creative}>CSS</li>
                        <li className={styles.creative}>Sass</li>
                        <li className={styles.creative}>Styled components</li>
                        <li className={styles.creative}>JSS</li>
                        <li className={styles.creative}>Photography</li>
                        <li className={styles.creative}>Adobe Illustrator</li>
                        <li className={styles.creative}>Adobe Photoshop</li>
                        <li className={styles.creative}>Figma</li>
                        <li className={styles.design}>Design systems</li>
                        <li className={styles.design}>Storybook</li>
                        <li className={styles.foundation}>MVC</li>
                        <li className={styles.foundation}>OOP</li>
                        <li className={styles.foundation}>Functional</li>
                        <li className={styles.foundation}>UI principals</li>
                        <li className={styles.foundation}>UX principals</li>
                        <li className={styles.foundation}>Responsive</li>
                        <li className={styles.foundation}>SEO</li>
                        <li className={styles.foundation}>RESTful API</li>
                        <li className={styles.foundation}>Accessibility WCAG 2.0</li>
                        <li className={styles.foundation}>Agile</li>
                        <li className={styles.foundation}>Waterfall</li>
                        <li className={styles.foundation}>Data analysis</li>
                        <li className={styles.foundation}>Requirement gathering</li>
                        <li className={styles.foundation}>Root cause analysis</li>
                        <li className={styles.foundation}>Debugging</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}