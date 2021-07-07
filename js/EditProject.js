const editForm = document.querySelector(".editForm");
const editModal = document.querySelector(".edit_modal");
const editBtn = document.querySelector(".editInput");
const changeBtn = document.querySelector(".change_btn");
const projectBox = document.querySelectorAll(".projectList");
const editClear = document.querySelector(".edit_clear_btn");
const editConfirm = document.querySelector(".edit_confirm_btn");
const editPaint = document.querySelectorAll(".edit_controls_color");

let CHANGE_COLOR = "";

const handleChangeColor = (event) => {
    const changeBg = window.getComputedStyle(event.target).backgroundColor;
    const changeColor = localStorage.getItem(PROJECT_NAME);
    if(changeColor !== null) {
        const changes = JSON.parse(changeColor);
        changes.map(item => {
            if(item.id === newList[0].id){
                item.color = changeBg;
            }
        })
        localStorage.setItem(PROJECT_NAME, JSON.stringify(changes));
    }
}

const handleChange = (event) => {
    const editItem = localStorage.getItem(PROJECT_NAME);
    const changeValue = event.target.value;
    if (editItem !== null){
        const editValue = JSON.parse(editItem);
        editValue.map(item => {
            if(item.id === newList[0].id){
                item.text = changeValue;
            }
        })
        localStorage.setItem(PROJECT_NAME, JSON.stringify(editValue));
    
    }
}

const handleEditClear = () => {
    editModal.classList.add("edit_showing");
    newList.pop();
}

const handleEditProject = () => {
    editModal.classList.remove("edit_showing");
    editBtn.value = newList[0].text;
}

function changeList () {
    changeBtn.addEventListener("click", handleEditProject);
    editClear.addEventListener("click", handleEditClear);
    Array.from(editPaint).map(item => item.addEventListener("click", handleChangeColor));
    editBtn.addEventListener("change", handleChange);
}

changeList();