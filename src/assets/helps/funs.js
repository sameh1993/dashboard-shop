
export const getUrlImg = function (img) {
    const imageUrl = new URL(`/src/assets/images/${img}`, import.meta.url);
    return imageUrl;
}