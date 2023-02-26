document.getElementById("add").onclick = () => {
    if (document.getElementById("name").value != "" && !document.getElementById("name").value.includes("'") && !document.getElementById("name").value.includes('"')){
        var lista = document.getElementById("lista")
        var todo = document.createElement("todo")
        todo.id = document.getElementById("name").value
        todo.className = "item"
        todo.innerHTML = `<li class='liitem'><button class='text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2' onclick='RemoveItem("${document.getElementById("name").value}")'> X </button>` + document.getElementById("name").value+"</li>"
        lista.appendChild(todo)
        document.getElementById("name").value = ""
    }
    let elem = document.querySelectorAll("todo")
    let elems = []
    elem.forEach(item => {
        elems.push(item.id)
    })
    localStorage.setItem("savedTodos", JSON.stringify(elems))
}
RemoveItem = (id) => {
    elemento = document.getElementById(id)
    elemento.remove();
    let elem = document.querySelectorAll("todo")
    let elems = []
    elem.forEach(item => {
        elems.push(item.id)
    })
    localStorage.setItem("savedTodos", JSON.stringify(elems))
}
Pulisci = () => {
    let elem = document.querySelectorAll("todo")
    elem.forEach(item => {
        item.remove();
    })
    elem = document.querySelectorAll("todo")

    let elems = []
    elem.forEach(item => {
        elems.push(item.id)
    })
    localStorage.setItem("savedTodos", JSON.stringify(elems))
}
Load = () => {
    let savedTodos = JSON.parse(localStorage.getItem("savedTodos"))
    if (savedTodos != null){
        savedTodos.forEach(item => {
            var lista = document.getElementById("lista")
            var todo = document.createElement("todo")
            todo.id = item
            todo.className = "item"
            todo.innerHTML = `<li class='liitem'><button class='text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2' onclick='RemoveItem("${item}")'> X </button>` + item+"</li>"
            lista.appendChild(todo)
        })
    }
}
