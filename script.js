/**
 * This script handles all the interactive elements of the portfolio website.
 * It should be loaded at the end of the body in the HTML file.
 */
document.addEventListener('DOMContentLoaded', function() {
    
    /**
     * --- Mobile Menu Toggle ---
     * Toggles the visibility of the mobile navigation menu when the hamburger
     * icon is clicked.
     */
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    /**
     * --- Typing Effect ---
     * Creates a dynamic typing animation for the hero section subtitle.
     * It cycles through a predefined list of strings.
     */
    const typingElement = document.getElementById('typing-effect');
    if (typingElement) {
        const words = ["Just a fun programmer <\\/>","I build things for fun <\\/>"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                // Deleting characters
                typingElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                // Typing characters
                typingElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            // Check if word is fully typed or fully deleted
            if (!isDeleting && charIndex === currentWord.length) {
                // Pause at the end of the word before starting to delete
                setTimeout(() => isDeleting = true, 2000);
            } else if (isDeleting && charIndex === 0) {
                // Move to the next word
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
            
            const typeSpeed = isDeleting ? 100 : 150;
            setTimeout(type, typeSpeed);
        }
        
        type(); // Start the typing animation
    }

    /**
     * --- Reveal on Scroll ---
     * Adds a 'visible' class to elements with the 'reveal' class when they
     * are scrolled into the viewport, triggering a fade-in animation.
     */
    const revealElements = document.querySelectorAll('.reveal');
    
    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            // Reveal element when its top edge is 100px from the bottom of the viewport
            if (elementTop < windowHeight - 100) {
                el.classList.add('visible');
            }
        });
    }
    
    // Add event listener for scroll and run once on load
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check in case elements are already in view
});
