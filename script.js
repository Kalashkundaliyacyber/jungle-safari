// script.js

document.addEventListener('DOMContentLoaded', function() {
    const whatsappIcon = document.querySelector('.whatsapp-icon');
    const phoneIcon = document.querySelector('.phone-icon');

    whatsappIcon.addEventListener('mouseover', function() {
        this.classList.add('floating');
    });

    whatsappIcon.addEventListener('mouseout', function() {
        this.classList.remove('floating');
    });

    phoneIcon.addEventListener('mouseover', function() {
        this.classList.add('floating');
    });

    phoneIcon.addEventListener('mouseout', function() {
        this.classList.remove('floating');
    });
});







document.addEventListener("DOMContentLoaded", function() {
    /**
     * Count up from start to end within the specified duration
     * @param {HTMLElement} element - The DOM element to update
     * @param {number} start - The starting number
     * @param {number} end - The ending number
     * @param {number} duration - The duration of the animation in milliseconds
     */
    function countUp(element, start, end, duration) {
        let startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            let progress = timestamp - startTime;
            let current = Math.min(Math.floor(progress / duration * (end - start) + start), end);
            element.textContent = current.toLocaleString(); // Format the number with commas
            if (current < end) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }

    // Create an Intersection Observer
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get the elements
                const packagesDesigned = document.getElementById("packages-designed");
                const jeepSafariBookings = document.getElementById("jeep-safari-bookings");
                const birdWatching = document.getElementById("bird-watching");
                const natureGuiding = document.getElementById("nature-guiding");

                // Check if elements are available and call the countUp function with the desired parameters
                if (packagesDesigned) countUp(packagesDesigned, 0, 2850, 2000);
                if (jeepSafariBookings) countUp(jeepSafariBookings, 0, 3404, 2000);
                if (birdWatching) countUp(birdWatching, 0, 185, 2000);
                if (natureGuiding) countUp(natureGuiding, 0, 887, 2000);

                // Unobserve the element after counting
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the target is visible
    });

    // Target the section that contains the numbers
    const section = document.querySelector(".why-us");
    if (section) {
        observer.observe(section);
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.container');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    containers.forEach(container => {
        observer.observe(container);
    });
});
