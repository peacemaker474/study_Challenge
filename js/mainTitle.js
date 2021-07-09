const mainTitle = document.querySelector(".request_name");

const handleChangeTitle = (event) => {
    const clickLi = event.path.filter(item => item.localName === "li");
    const findTitle = Array.from(clickLi[0].children).filter(item => item.localName === "span");
    mainTitle.textContent = findTitle[0].innerText;
    
}

ul.addEventListener("click", handleChangeTitle);