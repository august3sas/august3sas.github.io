function scrollToAnchor(event) {
    event.preventDefault();

    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
        const offset = 50;
        const targetOffset = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: targetOffset, behavior: "smooth" });
    }
}