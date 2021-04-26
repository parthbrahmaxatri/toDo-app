const form = document.querySelector("form");
const input = document.querySelector("input")
const toDos = document.querySelector("ul");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const toDoText = input.value;

    if(toDoText) {
        const toDoElement = document.createElement("li");
        toDoElement.innerText = toDoText;
        toDos.appendChild(toDoElement);

        toDoElement.addEventListener('click', () => {
            toDoElement.classList.toggle("completed");
        })

        toDoElement.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            toDoElement.remove();
        })
        
        input.value = '';
    }
})