document.addEventListener('DOMContentLoaded', () => {
    const floatingFlowersBg = document.querySelector('.floating-flowers-bg');
    const numFloatingFlowers = 10; // Số lượng bông hoa nhỏ bay lượn

    for (let i = 0; i < numFloatingFlowers; i++) {
        const flower = document.createElement('div');
        flower.classList.add('floating-flower');
        
        // Vị trí ngẫu nhiên trên toàn màn hình
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        
        flower.style.left = `${randomX}px`;
        flower.style.top = `${randomY}px`;
        
        // Kích thước ngẫu nhiên nhẹ cho bông hoa nhỏ
        const randomSize = 50 + Math.random() * 50; // Từ 50px đến 100px
        flower.style.width = `${randomSize}px`;
        flower.style.height = `${randomSize}px`;

        // Thời gian animation và delay ngẫu nhiên
        const animationDuration = 10 + Math.random() * 10; // 10s đến 20s
        const animationDelay = Math.random() * 5; // 0s đến 5s
        
        flower.style.animation = `floatAround ${animationDuration}s infinite ease-in-out`;
        flower.style.animationDelay = `${animationDelay}s`;
        
        floatingFlowersBg.appendChild(flower);
    }
});