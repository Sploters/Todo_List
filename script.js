const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");

inputBox.onkeyup = () => {
    let userData = inputBox.value;
    if(userData.trim() != 0) {
        addBtn.classList.add("active");
    } else {
        addBtn.classList.remove("active");
    }
}

addBtn.onclick = () => {
    let getLocalStorage = localStorage.getItem("New Todo");
    if (getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push("Hello World!");
    localStorage.setItem("New Todo", JSON.stringify(listArr));
}

function showTasks() {
    let getLocalStorage = localStorage.getItem("New Todo");
    if (getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
    let newLiTag = '';
    listArr.forEach(element, index => {

    });
}