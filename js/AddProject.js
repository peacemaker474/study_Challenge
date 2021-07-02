const confirm = document.querySelector(".confirm_btn");
const writeBtn = document.querySelector(".projectInput");
const projectLists = document.querySelector(".projectLists");

const PROJECT_NAME = "Project"

let projectList = [];

const saveLocalProject = () => {
    localStorage.setItem(PROJECT_NAME, JSON.stringify(projectList));
}

const paintProject = (text) => {
    const lists = document.createElement('li');
    const pjBox = document.createElement('div');
    const pjName = document.createElement('span');
    const pjIcon = document.createElement("div");
    
    const timeDiv = document.createElement('div');
    const hours = document.createElement('span');
    const timeNum = document.createElement('span');

    const newId = projectList.length + 1;

    lists.className = "projectList";
    lists.id = newId;
    pjBox.className = "projectName";
    pjIcon.className = "bgcolor"
    pjBox.prepend(pjIcon);
    pjBox.appendChild(pjName);
    pjName.innerText = text;
    timeDiv.className = "times";
    timeDiv.prepend(hours);
    timeDiv.appendChild(timeNum);
    hours.innerText = "0h";
    timeNum.innerText = "0";

    lists.prepend(pjBox);
    lists.appendChild(timeDiv);

    projectLists.appendChild(lists);

    const projectObj = {id: newId, text};
    projectList.push(projectObj)
    saveLocalProject();
}

const handleConfirmProject = () => {
    projectModal.classList.add("project_showing");
    const currentValue = writeBtn.value;
    if(currentValue !== ""){
        paintProject(currentValue);
        writeBtn.value = "";
    }
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
}

showProject();