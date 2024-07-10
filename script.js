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

document.addEventListener('DOMContentLoaded', function() {
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

document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalVideo = document.getElementById('modal-video');
    const closeModal = document.querySelector('.close');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const type = item.getAttribute('data-type');
            if (type === 'photo') {
                const imgSrc = item.querySelector('img').getAttribute('src');
                modalImg.src = imgSrc;
                modalImg.style.display = 'block';
                modalVideo.style.display = 'none';
            } else if (type === 'video') {
                const videoSrc = item.querySelector('video').getAttribute('src');
                modalVideo.src = videoSrc;
                modalVideo.style.display = 'block';
                modalImg.style.display = 'none';
            }
            modal.style.display = 'flex';
            adjustModalContent(); // Call function to adjust modal content size
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        modalImg.src = '';
        modalVideo.src = '';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            modalImg.src = '';
            modalVideo.src = '';
        }
    });

    function adjustModalContent() {
        const modalContent = document.querySelector('.modal-content');
        const modalWidth = modalContent.clientWidth;
        const modalHeight = modalContent.clientHeight;

        // Adjust based on screen size or specific conditions
        if (window.innerWidth < modalWidth || window.innerHeight < modalHeight) {
            modalContent.style.maxWidth = '90%';
            modalContent.style.maxHeight = '90%';
        } else {
            modalContent.style.maxWidth = '80%';
            modalContent.style.maxHeight = '80%';
        }
    }
});
