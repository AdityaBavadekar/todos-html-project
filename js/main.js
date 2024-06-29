const ul = document.getElementById('todo-list');

for (let i = 1; i <= 10; i++) {

    fetch(`https://jsonplaceholder.org/posts/${i}`)
    .then(response => response.json())
    .then(data => {
        const listItem = `
            <li class="todo-list-item">
                <a href="#" class="todo-link">
                    <div class="todo">
                    
                        <div class="more-button">
                            <i class="ri-more-fill"></i>
                        </div>
                        <div class="todo-content">
                            <p class="todo-title">${data.title}</p>
                            <div class="todo-timestamp-stats">
                                <p class="created">CREATED ${data.publishedAt}</p>
                                <p class="divider">&centerdot;</p>
                                <p class="last-edited">
                                    EDITED ${data.updatedAt}
                                </p>
                            </div>
                            <p class="todo-description">${data.content}</p>
                        </div>
                    </div>
                </a>
            </li>
        `;
        ul.innerHTML += listItem;
    })
    
}