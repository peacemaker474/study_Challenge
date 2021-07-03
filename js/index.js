const modal = document.querySelector(".modal");
const loginBtn = document.querySelector(".loginBtn");
const clearBtn = document.querySelector(".clearBtn");
window.document.oncontextmenu = () => false;

const handleClear = () => {
    modal.classList.add("showing");
}

const handleClick = () => {
    modal.classList.remove("showing");
}

loginBtn.addEventListener("click", handleClick);
clearBtn.addEventListener("click", handleClear);