import styles from "../HeaderArea/HeaderArea.module.css"

export default function HeaderArea(){
    return(
        <header className={styles.header}>
            <img 
            className='logo'
            src="../images/bamos_logo/bamosDesignLogo_black.svg"
            alt="ロゴ"/>
            <ul className={styles.menuBer}>
                <nav>MENU-01</nav>
                <nav>MENU-02</nav>
                <nav>MENU-03</nav>
                <nav>MENU-04</nav>
            </ul>
        </header>
    )
}