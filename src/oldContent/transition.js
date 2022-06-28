window.addEventListener('scroll', (e) => {

    const startElement = document.getElementById("languages-section");
    const startPosition = startElement.getBoundingClientRect().top;
    
    const endElement = document.getElementById("work-history-section");
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