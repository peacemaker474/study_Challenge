// 로그인 모달창에서 입력받는 태그
const form = document.querySelector("#login_form"),
    email = form.querySelector("[type=email]");
// 로그인 박스
const login = document.querySelector(".loginForm");
// 헤더 부분
const header = document.querySelector("header");
// 프로필 모달창
const synchModal = document.querySelector(".synch_modal");
// 프로필 모달창 내 로그아웃 버튼
const logoutBtn = document.querySelector(".logout");

const EMAIL_ID = "ID"; // 로컬 스토리지 키 Name

// 로컬 스토리지 데이터 및 값 저장
const saveLocalData = (value) => {
    localStorage.setItem(EMAIL_ID, value);
}

const handleSubmit = () => {
    let myID = email.value;
    saveLocalData(myID);
}
// 모달창 띄우기
const handleUserModal = () => {
    synchModal.classList.toggle("synch_showing");
}

// 로컬 스토리지 데이터 삭제
const handleRemoveData = () => {
    localStorage.removeItem(EMAIL_ID);
}

// 프로필 영역
const printNewProfile = (myProfile) => {
    const userBox = document.createElement("div");
    const userImage = document.createElement("img");
    const userName = document.createElement("span");
    const btn = document.createElement("button");

    userBox.id = "profileInfo";
    userBox.prepend(userImage);
    userBox.appendChild(userName);
    userBox.appendChild(btn);
    userImage.src = "assets/파이리.jpeg"
    userName.innerText = myProfile;
    btn.innerText = "⌵"
    header.appendChild(userBox);
    header.replaceChild(userBox, login);

    logOut.addEventListener("click", handleUserModal);
}

// 로컬 스토리지 데이터 가져오기
const loadedLocalData = () => {
    const parseId = localStorage.getItem(EMAIL_ID);
    if (parseId !== null) {
        const myProfile = String(parseId.split("@", 1));
        printNewProfile(myProfile);
    }
}
// DOM 제어
function printProfile () {
    loadedLocalData();
    form.addEventListener("submit", handleSubmit);
    logoutBtn.addEventListener("click", handleRemoveData);
}

printProfile();