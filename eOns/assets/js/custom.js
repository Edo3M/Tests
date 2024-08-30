document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section'); // Assuming each section has an ID matching the nav links
    const navItems = document.querySelectorAll('nav ol li');

    // Add click event to each nav item
    navItems.forEach(item => {
        item.querySelector('a').addEventListener('click', function () {
            navItems.forEach(i => i.classList.remove('active')); // Remove active class from all
            item.classList.add('active'); // Add active class to the clicked item
        });
    });

    // Highlight the current section in view
    window.addEventListener('scroll', function () {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 50) { // 50 is a buffer to trigger the change slightly earlier
                currentSection = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active'); // Remove active class from all
            if (item.querySelector('a').getAttribute('href').includes(currentSection)) {
                item.classList.add('active'); // Add active class to the current section in view
            }
        });
    });
});