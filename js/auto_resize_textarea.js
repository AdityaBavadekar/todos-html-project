const textareaItems = document.getElementsByClassName('autoResize');

Array.from(textareaItems).forEach(element => {
    element.addEventListener('input', autoResize);
})

function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}