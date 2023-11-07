document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input") as HTMLInputElement;
  const addButton = document.getElementById("add-button") as HTMLButtonElement;
  const taskList = document.getElementById("task-list");

  addButton.addEventListener("click", () => {
    const taskText = taskInput.value;
    if (taskText.trim() !== "") {
      addTask(taskText);
      taskInput.value = "";
    }
  });

  function addTask(taskText: string) {
    const li = document.createElement("li");
    li.innerHTML = `
            ${taskText}         
            <button class="delete-button">DEL</button>
            <button class="edit-button">EDIT</button>
        `;
    if (taskList) {
      taskList.appendChild(li);

      const deleteButton = li.querySelector(
        ".delete-button"
      ) as HTMLButtonElement;
      deleteButton.addEventListener("click", () => {
        if (taskList.contains(li)) {
          taskList.removeChild(li);
        }
      });

      const editButton = li.querySelector(".edit-button") as HTMLButtonElement;
      editButton.addEventListener("click", () => {
        const newText = prompt("Edit task:", taskText);
        if (newText !== null) {
          if (newText.trim() !== "") {
            // Check if the edited task is not empty
            taskText = newText;
            if (li.firstChild) {
              li.firstChild.textContent = newText;
            }
          }
        }
      });
    }
  }
});
