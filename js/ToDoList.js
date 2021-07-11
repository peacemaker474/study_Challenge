const toDoForm = document.querySelector(".add_toDoList");
const toDoInput = toDoForm.querySelector("#addToDo");
const toDoListUl = document.querySelector(".toDo_list");
const fnListUl = document.querySelector(".fn_list");

const TODOLIST = "TODO_LIST";
const FINISHLIST = "FNTODO_LIST";
let toDoList = [];
let finishList = [];


const handleReSendList = ({path}) => {
    fnListUl.removeChild(path[1]);
    const sendFnList = finishList.filter(item => item.id === parseInt(path[1].id));
    const text = sendFnList[0].text;
    paintToDoList(text);
    const changeList = finishList.filter(item => item.id !== parseInt(path[1].id));
    finishList = changeList;
    saveLocalToDo();
}
const handleClearList = ({path}) => {
    toDoListUl.removeChild(path[1]);
    const sendFnList = toDoList.filter(item => item.id === parseInt(path[1].id));
    const text = sendFnList[0].text;
    paintFnToDoList(text);
    const changeList = toDoList.filter(item => item.id !== parseInt(path[1].id));
    toDoList = changeList;
    saveLocalToDo();
}

const saveLocalToDo = () => {
    localStorage.setItem(TODOLIST, JSON.stringify(toDoList));
    localStorage.setItem(FINISHLIST, JSON.stringify(finishList));
}

const paintFnToDoList = (text) => {
    const li = document.createElement("li");
    const timerBtn = document.createElement("button");
    const finishBtn = document.createElement("button");
    const newId = finishList.length + 1;

    li.id = newId;
    li.textContent = text;
    timerBtn.textContent = "⏱";
    finishBtn.textContent = "✅";

    finishBtn.addEventListener("click", handleReSendList);

    li.prepend(timerBtn);
    li.prepend(finishBtn);

    fnListUl.appendChild(li);

    const obj = {id:newId, text}
    finishList.push(obj);
    
    saveLocalToDo();

}

const paintToDoList = (text) => {
    const li = document.createElement("li");
    const timerBtn = document.createElement("button");
    const finishBtn = document.createElement("button");
    const newId = toDoList.length + 1;

    li.id = newId;
    li.textContent = text;
    timerBtn.textContent = "⏱";
    finishBtn.textContent = "✅";

    finishBtn.addEventListener("click", handleClearList);

    li.prepend(timerBtn);
    li.prepend(finishBtn);

    toDoListUl.appendChild(li);

    const obj = {id:newId, text}
    toDoList.push(obj);
    
    saveLocalToDo();
    
}

const handleListSubmit = (event) => {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDoList(currentValue);
    toDoInput.value = "";
}

const loadedList = () => {
    const getToDoList = localStorage.getItem(TODOLIST);
    const getFnToDoList = localStorage.getItem(FINISHLIST);

    if(getToDoList !== null){
        const parseToDo = JSON.parse(getToDoList);
        parseToDo.forEach(item => paintToDoList(item.text));
    }
    if(getFnToDoList !== null){
        const parseFnToDo = JSON.parse(getFnToDoList);
        parseFnToDo.forEach(item => paintFnToDoList(item.text));
    }
    
}

function showToDoList () {
    loadedList();
    toDoForm.addEventListener("submit", handleListSubmit);
}

showToDoList();