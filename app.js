const foodItemsContainer = document.querySelector('.food-items');
let scrollPosition = 0;

function scrollLeft() {
    scrollPosition = Math.min(scrollPosition + 100, 0);
    foodItemsContainer.style.transform = `translateX(${scrollPosition}%)`;
}

function scrollRight() {
    const maxScrollPosition = -100 * (foodItemsContainer.children.length - 4);
    scrollPosition = Math.max(scrollPosition - 100, maxScrollPosition);
    foodItemsContainer.style.transform = `translateX(${scrollPosition}%)`;
}
