const currentUrl = new URL(window.location.href);
const currentParams = currentUrl.searchParams;
const id = currentParams.get('id');
console.log('id:', id);

titleElement = document.getElementById('todo-title');
descriptionElement = document.getElementById('todo-description');

if (id){
    fetch(`https://jsonplaceholder.org/posts/${id}`)
    .then(response => response.json())
    .then(data => {
        titleElement.innerHTML = data.title;
        descriptionElement.innerHTML = data.content;
        titleElement.dispatchEvent(new Event("input"))
        descriptionElement.dispatchEvent(new Event("input"))
    });
}