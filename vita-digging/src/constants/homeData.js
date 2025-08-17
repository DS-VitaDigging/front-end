// 캐러셀 이미지
export const carouselImages = [
  '/images/banner2.jpg',
  '/images/banner3.jpg',
  '/images/banner1.png',
];

// 캐러셀 설정
export const carouselSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

// 연령대 태그
export const ageTags = ['20대', '30대', '40대', '50대 이상'];

// 연령대 -> API 파라미터 변환
export const ageGroupMapping = {
  '20대': '20s',
  '30대': '30s', 
  '40대': '40s',
  '50대 이상': '50s'
};