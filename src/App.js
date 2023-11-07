// document.addEventListener("DOMContentLoaded", function () {
//   const taskInput = document.getElementById("task-input");
//   const addButton = document.getElementById("add-button");
//   const taskList = document.getElementById("task-list");

//   addButton.addEventListener("click", () => {
//     const taskText = taskInput.value;
//     if (taskText.trim() !== "") {
//       addTask(taskText);
//       taskInput.value = "";
//     }
//   });

//   function addTask(taskText) {
//     const li = document.createElement("li");
//     li.innerHTML = `
//           ${taskText}
//           <button class="delete-button">DEL</button>
//           <button class="edit-button">EDIT</button>
//       `;
//     taskList.appendChild(li);

//     const deleteButton = li.querySelector(".delete-button");
//     deleteButton.addEventListener("click", () => {
//       taskList.removeChild(li);
//     });

//     const editButton = li.querySelector(".edit-button");
//     editButton.addEventListener("click", () => {
//       const newText = prompt("Edit task:", taskText);
//       if (newText !== null) {
//         taskText = newText;
//         li.firstChild.textContent = newText;
//       }
//     });
//   }
// });
