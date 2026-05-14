import style from './footerArea.module.css';

export default function FooterArea(){
    return(
        <footer className={style.footer}>
            <img className={style.logoAccent} src="../images/bamos_logo/bamosDesignLogo_accent.svg" alt="フッターロゴ" />
        </footer>
    )
}