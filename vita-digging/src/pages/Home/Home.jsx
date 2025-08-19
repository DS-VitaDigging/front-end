/** @jsxImportSource @emotion/react */
import Slider from 'react-slick';
import { useState, useEffect } from 'react';
import * as styles from './Home.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { carouselImages, ageTags, ageGroupMapping, carouselSettings } from '../../constants/homeData';
import VitaCard from './VitaCard/VitaCard';
import { getPopularProductsByAge } from '../../apis/Home/home';
import { createTags } from '../../utils/tagUtils';


const Home = () => {
    const [selectedTag, setSelectedTag] = useState('20대');
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    // 연령대별 인기 제품 조회
    const fetchPopularProducts = async (ageTag) => {
        setError(null);
        try {
            const ageGroupParam = ageGroupMapping[ageTag] || '20s';
            const data = await getPopularProductsByAge(ageGroupParam);
            setProducts(data);
        } catch (err) {
            setError('제품 정보를 불러오는데 실패했습니다.');
        }
    };

    // 선택된 태그가 변경될 때 데이터 로드
    useEffect(() => {
        fetchPopularProducts(selectedTag);
    }, [selectedTag]);

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

                {/* 연령대 태그 */}
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

                {/* 영양제 카드 */}
                <div css={styles.cardScrollContainer}>
                    {error ? (
                        <div css={styles.errorMessage}>{error}</div>
                    ) : products.map(product => (
                            <div key={product.id}>
                                <VitaCard card={{
                                    id: product.id,
                                    title: product.name,
                                    compony: product.manufacturer,
                                    image: product.imageUrl,
                                    tags: createTags(product)
                                }} />
                            </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
