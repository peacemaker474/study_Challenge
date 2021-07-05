const confirm = document.querySelector(".confirm_btn");
const writeBtn = document.querySelector(".projectInput");
const projectLists = document.querySelector(".projectLists");

const PROJECT_NAME = "Project"

const projectList = [];

const saveLocalProject = () => {
    localStorage.setItem(PROJECT_NAME, JSON.stringify(projectList));
}

const paintProject = (text) => {
    const lists = document.createElement('li');
    const pjName = document.createElement('span');
    const pjIcon = document.createElement("div");
    
    const timeDiv = document.createElement('div');
    const hours = document.createElement('span');
    const timeNum = document.createElement('span');

    const newId = projectList.length + 1;

    lists.className = "projectList";
    lists.id = newId;
    pjIcon.className = "bgcolor"
    lists.prepend(pjIcon);
    lists.appendChild(pjName);
    pjName.textContent = text;
    timeDiv.className = "times";
    timeDiv.prepend(hours);
    timeDiv.appendChild(timeNum);
    hours.textContent = "0h";
    timeNum.textContent = "0";

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