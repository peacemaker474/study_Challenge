const editModal = document.querySelector(".edit_modal");
const editBtn = document.querySelector(".editInput");
const changeBtn = document.querySelector(".change_btn");
const projectBox = document.querySelectorAll(".projectList");
const editClear = document.querySelector(".edit_clear_btn");

const editList = (item) => {

}


const handleEditClear = () => {
    editModal.classList.add("edit_showing");
    newList.pop();
}

const handleEditProject = () => {
    editModal.classList.remove("edit_showing");
    const editItem = localStorage.getItem(PROJECT_NAME);
    if (editItem !== null){
        const editValue = JSON.parse(editItem);
        const newItem = editValue.filter(item => item.id === newList[0].id);
        const restItem = editValue.filter(item => item.id !== newList[0].id);
    }
    editBtn.value = newList[0].text;
}

function changeList () {
    changeBtn.addEventListener("click", handleEditProject);
    editClear.addEventListener("click", handleEditClear);
}

changeList();