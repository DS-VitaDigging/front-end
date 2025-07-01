/** @jsxImportSource @emotion/react */
import * as styles from './VitaCardStyle.style';

const VitaCard = ({ card }) => {
    return (
        <div css={styles.cardBox}>
            <img
                src="/images/vita.svg" 
                alt={card.title}
                css={styles.cardImage}
            />
            <p css={styles.cardTitle}>{card.title}</p>
            <p css={styles.cardCompany}>{card.compony}</p>
            <div css={styles.tagList}>
                {card.tags.map(tag => (
                    <span key={tag} css={styles.tagItem}>{tag}</span>
                ))}
            </div>
        </div>
    );
};

export default VitaCard;
