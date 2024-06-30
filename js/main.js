const ul = document.getElementById('todo-list');
let todos = new Array();

for (let i = 1; i <= 1; i++) {
    fetch(`https://jsonplaceholder.org/posts`)
    .then(response => response.json())
    .then(data => {
        todos.push(...data);
        initTodos()
    })
}

filter = null

function initTodos(){
    ul.innerHTML = ""
    for (let index = 0; index < todos.length; index++) {
        const data = todos[index];
        if (filter){
            if(!issame(data.publishedAt, filter) && !issame(data.updatedAt, filter)) {
                continue;
            }
        }

        const navLink = `/add_todo.html?id=${index}`
        const listItem = `
            <li class="todo-list-item">
                <a href="${navLink}" class="todo-link">
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
    };
}

filterDialog = document.getElementById('filter-dialog')

document.getElementById('filter-close').addEventListener('click', _ => {
    filter = document.getElementById('date-input').value;
    console.log('Filter: '+ filter);
    if (filter && filter != "dd-mm-yyyy"){
        initTodos()
    }
    filterDialog.close()
});

document.getElementById('filter-button').addEventListener('click', _ => {
    filterDialog.showModal()
});

function issame(elementDateString, targetDate){
    const [date, time] = elementDateString.split(" ");
    const [day, month, year] = date.split("/");

    const newDateString = `${year}-${month}-${day}`
    console.log('Compare {' + newDateString + '} {' + targetDate + '}');
    const issame_date = newDateString == targetDate;
    console.log(issame_date);
    return issame_date;
}