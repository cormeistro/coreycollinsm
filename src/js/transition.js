window.addEventListener('scroll', (e) => {

    if (window.scrollY > 650) {
        // enable dark mode
        document.body.classList.remove('bg-light');
        document.body.classList.add('bg-dark');
    } else {
        // enable light mode
        document.body.classList.remove('bg-dark');
        document.body.classList.add('bg-light');
    }
});