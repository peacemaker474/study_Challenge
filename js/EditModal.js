const ul = document.querySelector(".projectLists");
const li = ul.querySelectorAll("li");
const context = document.querySelector(".contextModal");
const deleteBtn = document.querySelector(".remove_btn");
const body = document.body;

let newList = [];

const handleRemove = () => {
    const removeItem = localStorage.getItem(PROJECT_NAME);
    if (removeItem !== null) {
        const getValue = JSON.parse(removeItem);
        const removeValue = getValue.filter(item => item.id !== newList[0].id);
        localStorage.setItem(PROJECT_NAME, JSON.stringify(removeValue));
        location.reload();
    }
}

const handleContext = () => {
    context.classList.add("context_showing");
}

const handleMenu = (event) => {
    const x = event.layerX;
    const y = event.layerY;

    const findValue = event.path.filter(item => item.localName === "span");
    const currentValue = projectList.filter(item => item.text === findValue[0].innerText);
    if(newList !== []){
        newList.push(currentValue[0]);
    }
    context.classList.remove("context_showing");
    context.style.left = `${x - 20}px`;
    context.style.top = `${y - 20}px`;
    // const find = Array.from(li).filter(item => item.id === event.target.id);
    // console.log(typeof find[0].id)
    // if(event.target.id === find[0].id) {
    //     find[0].style.border = "1px solid red";
    // }

    
}

ul.addEventListener("contextmenu", handleMenu);
body.addEventListener("click", handleContext);
deleteBtn.addEventListener("click", handleRemove);

