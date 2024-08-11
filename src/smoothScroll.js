let isScrolling = false;
let scrollTarget = 0;

function smoothScroll() {
    if (!isScrolling) return;

    const currentPosition = window.pageYOffset;
    const distance = scrollTarget - currentPosition;
    const speed = 0.9; // Adjust this value to control scroll speed (lower is slower)

    if (Math.abs(distance) > 1) {
        window.scrollTo(0, currentPosition + distance * speed);
        requestAnimationFrame(smoothScroll);
    } else {
        window.scrollTo(0, scrollTarget);
        isScrolling = false;
    }
}

function handleWheel(e) {
    e.preventDefault();

    const delta = e.deltaY;
    scrollTarget += delta;
    scrollTarget = Math.max(0, Math.min(scrollTarget, document.body.scrollHeight - window.innerHeight));

    if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(smoothScroll);
    }
}

export function initSmoothScroll() {
    window.addEventListener('wheel', handleWheel, { passive: false });
}