document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('#scrollHeader').offsetHeight; // Get the current height of the sticky header
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight; // Calculate the position to scroll to
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth' // Smooth scroll
            });
        }
    });
});
