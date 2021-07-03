const ul = document.querySelector(".projectLists");
const li = ul.querySelectorAll("li");
const context = document.querySelector(".contextModal");
const body = document.body;

let newList = [];

const handleContext = () => {
    context.classList.add("context_showing");
}

const handleMenu = (event) => {
    const x = event.layerX;
    const y = event.layerY;

    const findValue = event.path.filter(item => item.localName === "span");
    const currentValue = projectList.filter(item => item.text === findValue[0].innerText);
    newList.push(currentValue[0]);

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
