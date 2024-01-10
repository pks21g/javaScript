const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Task is empty, please add a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  inputBox.value = "";
  savedata();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") e.target.classList.toggle("checked");
    else if (e.target.tagName === "SPAN") e.target.parentElement.remove();
    savedata();
    // listContainer.removeEventListener('click', () => {})
  },
  false
);

function savedata() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showdata() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showdata();
