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

    // Add event listener for deletion
    var deleteButtons = document.getElementsByClassName("delete");
    for (var i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    // Add event listener for toggling
    var taskItems = document.querySelector(".list");
    for (var i = 0; i < taskItems.length; i++) {
      taskItems[i].onclick = function () {
        this.classList.toggle("checked");
      };
    }

    document.getElementById("newTask").value = "";
  }
}

function deleteTask(element) {
  element.parentNode.remove();
}
