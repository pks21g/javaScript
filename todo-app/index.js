const input = document.getElementById("input");
const submit = document.getElementById("submit");
const msg = document.getElementById("msg");
const action = document.getElementById("action");
const add = document.getElementById("add");
const inputf = document.getElementById("inputf");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value === "") {
    msg.innerHTML = "Message can't be empty";
  } else {
    msg.innerHTML = "Submitted";
    acceptData();
    input.value = "";
  }
});

let data = {};
let acceptData = () => {
  data["text"] = input.value;
  console.log(data.text);
  createPost();
};

let createPost = () => {
  action.innerHTML += `
     <div class="action">
           <p id="to-do-list-item">${input.value}</p>
        
         </div>
     `;
};
//    <i class="fa-solid fa-pen-to-square"></i>
//    <i class="fa-solid fa-delete-left"></i>

add.addEventListener("click", () => {
  if (inputf.style.display === "block") inputf.style.display = "none";
  else inputf.style.display = "block";
  console.log("clicked");
});

add.removeEventListener("click", () => {});
