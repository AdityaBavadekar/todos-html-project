const elements = document.getElementsByClassName('fetch-progress-text');
while (elements.length != 0) {    
    Array.from(elements).forEach(element => {
        console.log(element.classList.contains('prog-c'));
        if (element.classList.contains('prog-a')) {
            element.classList.remove('prog-a');
            element.classList.add('prog-b');
        }
        if (element.classList.contains('prog-b')) {
            element.classList.remove('prog-b');
            element.classList.add('prog-c');
        }
        if (element.classList.contains('prog-c')) {
            element.classList.remove('prog-c');
            element.classList.add('prog-a');
        }
    });
    break;
}
