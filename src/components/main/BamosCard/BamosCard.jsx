import styles from './BamosCard.module.css';
import bamosList from '../../../../bamosList/bamosList';
    
export default function BamosCard(){
    return(
    <div className={styles.bamosCardContainer}> 
        {bamosList.map((bamos, index) => ( 
            <div key={index} className={styles.bamosCard}> 
                <img src={bamos.image} alt={bamos.title} className={styles.bamosImage} />
                    <div className={styles.bamosContent}>
                        <h3 className={styles.bamosTitle}>[{bamos.category}] {bamos.title}</h3> 
                        <p className={styles.bamosAuthor}>{bamos.author}</p> 
                        <div className={styles.bamosReactions}> 
                            <span>
                                <img src="../images/thumb_up_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="グッドボタン" /> 
                                {bamos.thumbsUp} 
                            </span> 
                            <span>
                                <img src="../images/thumb_down_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="バッドボタン" /> 
                                {bamos.thumbsDown} 
                            </span> 
                        </div> 
                    </div> 
                </div> 
            ))} 
    </div> 
    );
}
