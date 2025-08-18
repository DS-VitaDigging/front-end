/**
 * 제품 데이터에서 태그 배열을 생성하는 함수
 * @param {Object} product - 제품 데이터 객체
 * @param {string} product.category - 제품 카테고리
 * @param {string} product.ingredients - 성분 (쉼표로 구분)
 * @param {number} maxIngredients - 최대 성분 개수 (기본값: 2)
 * @returns {Array<string>} 태그 배열 
 **/

export const createTags = (product, maxIngredients = 2) => {
    const tags = [];
    
    // 카테고리 추가
    if (product.category) {
        tags.push(product.category);
    }
    
    // ingredients 처리 (쉼표로 분리 후 지정된 개수만)
    if (product.ingredients) {
        const ingredientList = product.ingredients
            .split(',')
            .map(ingredient => ingredient.trim())
            .filter(ingredient => ingredient.length > 0)
            .slice(0, maxIngredients);
        tags.push(...ingredientList);
    }
    
    return tags.filter(Boolean).map(tag => `${tag}`);
};