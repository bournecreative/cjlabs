import Image, { StaticImageData } from 'next/image';
import styles from './adaptive.module.scss'

interface AdaptiveImgProps {
    desktop: StaticImageData
    mobile: StaticImageData
}

export const AdaptiveImage:React.FC<AdaptiveImgProps> = ({desktop, mobile} : AdaptiveImgProps) => {
    return (
        <picture >
             <source srcSet={mobile.src} media="(max-width: 768px)"/>
             <Image className={styles['hero-img']} src={desktop} alt="vector illustration of an astronaut holding a keyboard" priority/>
        </picture>
    )
}