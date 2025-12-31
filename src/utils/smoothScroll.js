export const smoothScroll = (targetId) => {
    const target = document.querySelector(targetId);
    if (target) {
        const offsetTop = target.offsetTop - 80; // Account for navbar height
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
};
