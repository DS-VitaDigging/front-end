/**
 * 나이 문자열에서 실제 나이를 추출하는 함수
 * @param {string} ageString - "14세(만 12세)" 형태의 나이 문자열
 * @returns {number} 실제 나이 (만 나이)
 */
export const extractAge = (ageString) => {
    if (!ageString) return 20; // 기본값
    
    try {  
        // 첫 번째 숫자 사용
        const ageMatch = ageString.match(/(\d+)세/);
        if (ageMatch) {
            return parseInt(ageMatch[1], 10);
        }
        
        return 20;
    } catch (error) {
        console.error('나이 파싱 실패:', error);
        return 20;
    }
};

/**
 * 나이를 ageGroup으로 변환하는 함수
 * @param {number} age - 만 나이
 * @returns {string} ageGroup ('20s', '30s', '40s', '50s')
 */
export const calculateAgeGroup = (age) => {
    if (age < 20) return '10s'; 
    if (age >= 20 && age < 30) return '20s';
    if (age >= 30 && age < 40) return '30s';
    if (age >= 40 && age < 50) return '40s';
    if (age >= 50 && age < 60) return '50s';
    if (age >= 60) return '60s';
    return '20s'; // 기본값
};

/**
 * 나이 문자열에서 직접 ageGroup을 계산하는 함수
 * @param {string} ageString - "14세(만 12세)" 형태의 나이 문자열
 * @returns {string} ageGroup
 */
export const getAgeGroupFromString = (ageString) => {
    const age = extractAge(ageString);
    return calculateAgeGroup(age);
}; 