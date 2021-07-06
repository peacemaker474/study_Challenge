const confirm = document.querySelector(".confirm_btn");
const writeBtn = document.querySelector(".projectInput");
const projectLists = document.querySelector(".projectLists");
const cotrolbg = document.querySelectorAll(".controls_color");

const PROJECT_NAME = "Project"
let COLOR = "";

const projectList = [];

const saveLocalProject = () => {
    localStorage.setItem(PROJECT_NAME, JSON.stringify(projectList));
}

const handleControlColor = (event) => {
    const bgColors = window.getComputedStyle(event.target).backgroundColor;
    COLOR = bgColors;
}
const paintProject = (text, color = COLOR) => {
    const lists = document.createElement('li');
    const pjName = document.createElement('span');
    const pjIcon = document.createElement("div");
    
    const timeDiv = document.createElement('div');
    const hours = document.createElement('span');
    const timeNum = document.createElement('span');
    let newColor;

    const newId = projectList.length + 1;
    
    if(color !== ""){
        newColor = color;
    }

    lists.className = "projectList";
    lists.id = newId;
    pjIcon.className = "bgcolor"
    pjIcon.style.backgroundColor = color;
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

    const projectObj = {id: newId, text, color: newColor};
    projectList.push(projectObj)
    saveLocalProject();
}

const handleConfirmProject = () => {
    projectModal.classList.add("project_showing");
    const currentValue = writeBtn.value;
    if(currentValue !== ""){
        paintProject(currentValue, COLOR);
        writeBtn.value = "";
    }
}

const loadedProject = () => {
    const getProject = localStorage.getItem(PROJECT_NAME);
    if(getProject !== null) {
        const parseP = JSON.parse(getProject);
        parseP.forEach(project => paintProject(project.text, project.color))
    }
}

function showProject () {
    loadedProject();
    Array.from(cotrolbg).forEach(item => item.addEventListener("click", handleControlColor));
    confirm.addEventListener("click", handleConfirmProject);
}

showProject();