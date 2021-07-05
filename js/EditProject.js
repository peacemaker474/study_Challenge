const editModal = document.querySelector(".edit_modal");
const editBtn = document.querySelector(".editInput");
const changeBtn = document.querySelector(".change_btn");
const projectBox = document.querySelectorAll(".projectList");
const editClear = document.querySelector(".edit_clear_btn");
const editConfirm = document.querySelector(".edit_confirm_btn");


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
    editBtn.addEventListener("change", handleChange);
}

changeList();