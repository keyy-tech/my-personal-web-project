// header&footer.js

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navTabContainer = document.querySelector('.navtab-container');

    navToggle.addEventListener('click', () => {
        navTabContainer.classList.toggle('active');
    });
});
