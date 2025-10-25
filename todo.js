let taskInput = document.getElementById("task");
let endInput = document.getElementById("End");
let startInput = document.getElementById("Start");
let addBtn = document.getElementById("addTask");
let taskList = document.getElementById("list");

addBtn.addEventListener("click", () => {
    let taskName = taskInput.value.trim();
    let endTime = endInput.value.trim();
    let startTime = startInput.value.trim();

    if (taskName === '' || endTime === '' || startTime === '') {
        if (taskName === '') taskInput.style.border = '1px dotted red';
        if (endTime === '') endInput.style.border = '1px dotted red';
        if (startTime === '') startInput.style.border = '1px dotted red';
        return;
    }

    let startConvert = +startTime.replace(':', '.');
    let endConvert = +endTime.replace(':', '.');
    let countHours = endConvert - startConvert;
    let countSecs = Math.floor(countHours * 3600);
    let tr = document.createElement("tr");

    let tdTask = document.createElement("td");
    tdTask.textContent = taskName;
    tdTask.classList.add("p-2");

    let tdTime = document.createElement("td");
    tdTime.classList.add("p-2");

    let tdDelete = document.createElement("td");
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash text-red-500 hover:text-red-700"></i>';
    deleteBtn.classList.add("px-2");

    tdDelete.appendChild(deleteBtn);
    let editBtn = document.createElement("button");
    editBtn.innerHTML = '<i class="fa-solid fa-pen text-blue-500 hover:text-blue-700"></i>';
    editBtn.classList.add("px-2");

    let markBtn = document.createElement("button");
    markBtn.innerHTML = "<i class='fa-solid fa-check text-green-500 hover:text-green-700'></i>";
    markBtn.classList.add("px-2");


    tdDelete.appendChild(editBtn);
    tdDelete.appendChild(markBtn)

    tr.appendChild(tdTask);
    tr.appendChild(tdTime);
    tr.appendChild(tdDelete);

    taskList.appendChild(tr);
    let interval = setInterval(() => {
        if (countSecs <= 0) {
            clearInterval(interval);
            tdTime.textContent = "Completed";
            tdTime.style.color = "green";
            return;
        }

        let hours = Math.floor(countSecs / 3600);
        let mins = Math.floor((countSecs % 3600) / 60);
        let secs = countSecs % 60;

        tdTime.textContent = `${hours}h : ${mins}m : ${secs}s`;
        countSecs--;
    }, 1000);
    deleteBtn.addEventListener("click", () => {
        let check = confirm("Are you sure you want to delete this task?");
        if (check) {
            clearInterval(interval);
            taskList.removeChild(tr);
        }
    });
    editBtn.addEventListener("click", () => {
        if (taskInput.value === '' || endInput.value === '' || startInput === '') {
            tr.style.display = 'none'
            taskInput.value = `${taskName}`
            endInput.value = `${endTime}`
            startInput.value = `${startTime}`
        }
    })
    markBtn.addEventListener("click", () => {
        clearInterval(interval)
        tdTime.textContent = "Completed";
        tdTime.style.color = "green";
    })
    taskInput.value = '';
    startInput.value = '';
    endInput.value = '';
    taskInput.focus();
});
