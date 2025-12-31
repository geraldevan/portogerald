export const animateCounter = (element, target) => {
    const isDecimal = target % 1 !== 0;
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = isDecimal ? target.toFixed(2) : Math.floor(target);
            clearInterval(timer);
        } else {
            element.textContent = isDecimal ? current.toFixed(2) : Math.floor(current);
        }
    }, duration / steps);
};
