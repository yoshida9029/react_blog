import styles from "../main/MainArea.module.css" 
import bamosList from "../../../bamosList/bamosList" 

export default function MainArea(){ 
    return( 
    <> 
    <div className={styles.sec1}>
        <img className={styles.first} src="../images/karsten-winegeart-T-yAoikgido-unsplash.jpg" alt="ファーストビュー" /> 
        <img className={styles.secLogo} src="../images/bamos_logo/bamosDesignLogo_white.svg" alt="" /> 
    </div> 
    </> 
    ) 
    }