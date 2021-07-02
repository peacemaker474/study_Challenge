const projectModal = document.querySelector(".project_modal");
const addProject = document.querySelector(".newProject");
const quitBtn = document.querySelector(".clear_btn");



const handleClearModal = () => {
    projectModal.classList.add("project_showing");
}

const handleProjectModal = () => {
    projectModal.classList.remove("project_showing");
}




quitBtn.addEventListener("click", handleClearModal);
addProject.addEventListener("click", handleProjectModal);