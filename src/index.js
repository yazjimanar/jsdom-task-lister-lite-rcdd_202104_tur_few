document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const submitButton = document.getElementById("submitForm");
  const tasks = document.getElementById("tasks");
  const newTask = document.getElementById("new-task-description");
  const removeTaks = document.getElementById("removeTask");

  submitButton.addEventListener("click", function(e){
    let taskLi = document.createElement('li');
    taskLi.textContent = newTask.value;
    tasks.append(taskLi);
    e.preventDefault();
  });

  removeTaks.addEventListener("click", function(e){
    const li = document.querySelectorAll();
    for (let i = 0; i < li.length; i++){
      if (newTask.value === li[i].textContent){
        tasks.removeChild(li[i]);
      }
    }
    e.preventDefault();
  });



});
