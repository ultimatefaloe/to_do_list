const input = document.getElementById("inputTask");
const form = document.getElementById("enterTask");
const display = document.getElementById("display");
const clearTaskbtn  = document.getElementById('clearTasks')


// task.taskValue = input.value;
// tasks.unshift(task);

// let reloadedtask = localStorage.getItem("tasks");  
// tasks = JSON.parse(reloadedtask);

// if (tasks !==null && tasks) {
//     tasks.forEach(e => {
//       display.innerHTML += `
//           <div class="">
//               <p>Task ${index}: ${tasks}</p>
//               <form id="deleteBtn_${index}" type="submit">X</form>
//           </div>
//       `;
//     })
//   } 


// form.addEventListener("submit", (e) => {
//   e.preventDefault();
  
//   let task = new Object();
//   let tasks = new Array();
//   task.taskValue = input.value;
//   tasks.unshift(task);

//   if (localStorage.getItem("tasks")) {
//     const prevTasks = JSON.parse(localStorage.getItem("tasks"));
//     const newTasks = [...prevTasks, tasks];
//     input.value = " ";
//     localStorage.setItem("tasks", JSON.stringify(newTasks));
//   } else {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//     input.value = " ";
//   }

//   if (task !==null && task) {
//     tasks.map((task)=>{
//       display.innerHTML += `
//           <div class="">
//               <p>Task ${index}: ${task.taskValue}</p>
//               <form id="deleteBtn_${index}" type="submit">X</form>
//           </div>
//       `;
//     })
//   }

//   index++;

// });

// del.addEventListener("submit", (e) => {
//   e.preventDefault();
//   localStorage.removeItem("tasks");
//   display.innerHTML = "";
// }); 

let tasks = JSON.parse(localStorage.getItem('tasks'))


function renderTasks(){
  display.innerHTML = ""
  tasks.forEach((task, index)=> {
    const taskDiv = document.createElement('div')
    taskDiv.classList.add('taskList')

    taskDiv.innerHTML = `
      <p>${task}</p>
      <button class="deleteBtn" data-index="${index}">X</button>
    `
    display.appendChild(taskDiv)
  });

  document.querySelectorAll('.deleteBtn').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const idx = e.target.getAttribute('data-index')
      tasks.splice(idx, 1)
      localStorage.setItem('tasks', JSON.stringify(tasks))
      renderTasks()
    })
  })
}

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  if(input.value.trim() === "") return

  tasks.push(input.value.trim())
  localStorage.setItem('tasks', JSON.stringify(tasks))
  input.value = ""
  renderTasks()
})

clearTaskbtn.addEventListener('click', (e)=>{
  e.preventDefault()
  tasks = []
  localStorage.setItem('tasks', JSON.stringify(tasks))
  renderTasks()
})

renderTasks()