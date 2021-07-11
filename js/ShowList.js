const fnList = document.querySelector(".fn_showing");
const showBox = document.querySelector(".show_finishwork");
const showText = document.querySelector(".work_name");

const handleShowList = () => {
        if(fnList.classList[1] === "fn_showing"){
        fnList.classList.remove("fn_showing");
        showText.textContent = "완료된 작업 숨기기";
    } else {
        fnList.classList.add("fn_showing");
        showText.textContent = "완료된 작업 보기";
    }
}

showBox.addEventListener("click", handleShowList);