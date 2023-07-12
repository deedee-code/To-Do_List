const list = [{name: "My Baby's Birthday", date: "2023-05-17"}];

renderTodoList();

function addList() {
    let inputElement = document.querySelector('.js-input-todoname');
    let inputList = inputElement.value

    let inputDateElement = document.querySelector('.js-input-date');
    let inputDate = inputDateElement.value

    list.push({
        name: inputList,
        date: inputDate
    });
    console.log(list)

    inputElement.value = '';

    renderTodoList();
}

function renderTodoList() {
    let allTodoList = '';

    for (let i = 0; i < list.length; i++) {
        const todoObject = list[i];
        const { name, date } = todoObject;
        const todoListElement = `
            <p>
                ${name} ${date}
                <button onclick="list.splice(${i}, 1); renderTodoList()">Remove</button>
            </p>
        `;
        allTodoList += todoListElement;
    }
    console.log(allTodoList)

    const todoListElement = document.querySelector('.js-todolist');
    if (todoListElement) {
        todoListElement.innerHTML = allTodoList;
    }

    document.querySelector('.js-todolist').innerHTML = allTodoList;
}