/** @jsxImportSource @emotion/react */
import Slider from 'react-slick';
import { useState } from 'react';
import * as styles from './Home.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { carouselImages, ageTags, supplementCards } from '../../constants/homeData';
import VitaCard from './VitaCard/VitaCard';

const Home = () => {
    const [selectedTag, setSelectedTag] = useState('50대 이상');

    const carouselSettings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div css={styles.wrapper}>
            <h3 css={styles.title}>
                챗봇과 건강 고민에 대해 대화하고 <br />
                나에게 맞는 영양제를 추천받아 보세요!
            </h3>

            <Slider {...carouselSettings} css={styles.carouselStyle}>
                {carouselImages.map((src) => (
                <div key={src}>
                    <img src={src} alt={`banner`} css={styles.bannerImage} />
                </div>
                ))}
            </Slider>
            
            <div css={styles.sectionWrapper}>
                <p css={styles.sectionTitle}>연령대 별 인기 영양제 Top 5</p>

                <div css={styles.tagContainer}>
                    {ageTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            css={[styles.tagButton, selectedTag === tag && styles.activeTagButton]}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
                <div css={styles.cardScrollContainer}>
                    {supplementCards.map(card => (
                        <div key={card.id}>
                            <VitaCard card={card} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
