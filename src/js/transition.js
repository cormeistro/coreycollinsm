window.addEventListener('scroll', (e) => {

    const startElement = document.getElementById("languages-banner");
    const startPosition = startElement.getBoundingClientRect().top;
    
    const endElement = document.getElementById("jobs-banner");
    const endPosition = endElement.getBoundingClientRect().bottom;
    
    if (startPosition < 0 && endPosition > 0) {
        // enable dark mode
        document.body.classList.remove('bg-light');
        document.body.classList.add('bg-dark');
    } else {
        // enable light mode
        document.body.classList.remove('bg-dark');
        document.body.classList.add('bg-light');
    }
});