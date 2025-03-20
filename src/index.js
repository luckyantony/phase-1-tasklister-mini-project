document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  // Add event listener for form submission
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Get the task description from the input field
    const taskDescription = document.getElementById("new-task-description").value;

    // Create a new list item for the task
    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;

    // Add the new task to the task list
    taskList.appendChild(taskItem);

    // Clear the input field
    form.reset();
    //
  });
});