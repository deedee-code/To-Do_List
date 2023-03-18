

const todolist = [];
const input = document.getElementById("input")
const list_item = document.getElementById("list_item")



document.getElementById('add-button').addEventListener("click", function() {
    todolist.push(input.value)
    input.value = ""
    addItem()
})


function addItem() {
    list_item.innerHTML = ""
    todolist.forEach(function(i, index) {
        list_item.innerHTML += "<li>"+i+"<button onclick='deleteItem("+index+")'>Delete</button><li>"
    })
}

function deleteItem(index) {
    todolist.splice(index, 1)
    addItem()
}



