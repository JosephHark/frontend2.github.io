function doSomething() {
    console.log('Something Happened!');
    console.log(event.type);
}
const clickParagraph = document.getElementById('click');
clickParagraph.addEventListener('click', () => console.log('click'));
clickParagraph.addEventListener('mousedown', () => console.log('down'));
clickParagraph.addEventListener('mouseup', () => console.log('up'));