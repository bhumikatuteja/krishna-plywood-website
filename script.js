document.addEventListener('DOMContentLoaded', () => {

    // ================================== //
    // DARK MODE LOGIC
    // ================================== //
    const themeToggle = document.getElementById('checkbox');
    const currentTheme = localStorage.getItem('theme');

    // This function applies the saved theme
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            if (themeToggle) themeToggle.checked = true;
        } else {
            document.body.classList.remove('dark-mode');
            if (themeToggle) themeToggle.checked = false;
        }
    }

    // On initial page load, check for a saved theme.
    // If no theme is found, default to 'dark'.
    if (currentTheme) {
        applyTheme(currentTheme);
    } else {
        // No theme saved? Default to dark mode for first-time visitors.
        applyTheme('dark'); 
        localStorage.setItem('theme', 'dark'); // Also save it for consistency
    }

    // Add event listener for the toggle switch
    if (themeToggle) {
        themeToggle.addEventListener('change', function() {
            if (this.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    }


    // ================================== //
    // SMOOTH SCROLL NAVIGATION
    // ================================== //
    document.querySelectorAll('nav button[data-scroll]').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-scroll');
            const section = document.getElementById(targetId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });


    // ================================== //
    // HOMEPAGE SLIDESHOW
    // ================================== //
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        slides[0].classList.add('active'); // Make the first slide active initially

        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 4000); // Change slide every 4 seconds
    }


    // ================================== //
    // CONTACT FORM SUBMISSION
    // ================================== //
    const consultationForm = document.getElementById('consultationForm');
    const formMessage = document.getElementById('formMessage');

    if (consultationForm) {
        consultationForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents the page from reloading

            if (formMessage) {
                formMessage.style.display = 'block';
            }

            consultationForm.reset();

            setTimeout(() => {
                if (formMessage) {
                    formMessage.style.display = 'none';
                }
            }, 4000); // Hide the message after 4 seconds
        });
    }

});