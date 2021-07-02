const projectModal = document.querySelector(".project_modal");
const confirm = document.querySelector(".confirm_btn");
const addProject = document.querySelector(".newProject");
const writeBtn = document.querySelector(".projectInput");
const folder = document.querySelector(".folderBox");
const abcd = document.querySelector(".abcde");

const PROJECT_NAME = "Project"

let projectList = [];

const saveLocalProject = () => {
    localStorage.setItem(PROJECT_NAME, JSON.stringify(projectList));
}

const paintProject = (text) => {
    const abcBox = document.createElement('div');
    const nameDiv = document.createElement('div');
    const name = document.createElement('span');
    const nameIcon = document.createElement("div");
    
    const timeDiv = document.createElement('div');
    const time1 = document.createElement('span');
    const time2 = document.createElement('span');

    abcBox.className = "abcde";
    nameDiv.className = "projectName";
    nameIcon.className = "bgcolor"
    nameDiv.prepend(nameIcon);
    nameDiv.appendChild(name);
    name.innerText = text;
    timeDiv.className = "times";
    timeDiv.prepend(time1);
    timeDiv.appendChild(time2);
    time1.innerText = "0h";
    time2.innerText = "0";

    abcBox.prepend(nameDiv);
    abcBox.appendChild(timeDiv);

    folder.appendChild(abcBox);

    const projectObj = {text};
    projectList.push(projectObj)
    saveLocalProject();
}


const handleProjectModal = () => {
    projectModal.classList.remove("project_showing");
}

const handleConfirmProject = () => {
    projectModal.classList.add("project_showing");
    const currentValue = writeBtn.value;
    paintProject(currentValue);
    writeBtn.value = "";
}

const loadedProject = () => {
    const getProject = localStorage.getItem(PROJECT_NAME);
    if(getProject !== null) {
        const parseP = JSON.parse(getProject);
        parseP.forEach(project => paintProject(project.text))
    }
}

function showProject () {
    loadedProject();
    confirm.addEventListener("click", handleConfirmProject);
    addProject.addEventListener("click", handleProjectModal);
}

showProject();