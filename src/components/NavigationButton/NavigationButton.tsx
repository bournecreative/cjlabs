import styles from "./navigationButton.module.scss"

export const NavigationButton = () => {
    return (
         <button className={`${styles.btn} ${styles.btn__menu}`}></button>
    )
}