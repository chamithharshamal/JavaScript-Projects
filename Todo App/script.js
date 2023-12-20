function addTask() {
  if (document.getElementById("newTask").value == "") {
    alert("Please enter a task to add.");
    return false;
  } else {
    document.getElementById("tag").innerHTML += `
            <div class="list">
                <span id='list-name'>
                    ${document.getElementById("newTask").value}
                </span>
                <button class="delete" onclick="deleteTask(this)">
                    <i class='bx bxs-message-square-x bx-sm'></i>
                </button>
            </div>
        `;

    // Add event listener for toggling
    // this code is to toggle the checked class on the list items means when we click on the list item it will toggle the checked class
    // toggle means if the class is present then it will remove the class and if the class is not present then it will add the class
    var taskItems = document.querySelector(".list");
    for (var i = 0; i < taskItems.length; i++) {
      taskItems[i].onclick = function () {
        this.classList.toggle("checked"); // Toggle checked class
      };
    }
    // this code is to clear the input field after adding the task
    document.getElementById("newTask").value = "";
  }
}

// this function is to delete the task
function deleteTask(element) {
  element.parentNode.remove(); // this will remove the parent node of the element which is clicked
}
