// import styles from './HeaderArea/HeaderArea.module.css';

export default function HeaderArea(){
    return(
        <header className='header'>
            <img 
            className="logoBlack"
            src="../images/bamos_logo/bamosDesignLogo_black.svg"
            alt="ロゴ"/>
            <ul className="menuBer">
                <nav>MENU-01</nav>
                <nav>MENU-02</nav>
                <nav>MENU-03</nav>
                <nav>MENU-04</nav>
            </ul>
        </header>
    )
}