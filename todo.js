const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS="toDos",
    TODOSHOWING_CN="showing",
    TODOFORM_CN="form";

let toDos=[];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    })
    toDos = cleanToDos
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}


function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length+1;
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText=text;
    toDoList.appendChild(li);
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id=newId;
    const toDoObj={
        text:text,
        id:newId
    };
    toDos.push(toDoObj);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
    saveToDos();
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos!==null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(ToDo){
            paintToDo(ToDo.text)
        });
            
    };
}

function init(){
    toDoForm.addEventListener("submit", handleSubmit);
    loadToDos();
}

init();