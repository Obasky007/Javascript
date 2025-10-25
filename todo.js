let taskInput = document.getElementById("task");
let endInput = document.getElementById("End");
let startInput = document.getElementById("Start")
let addBtn = document.getElementById("addTask");
let taskList = document.getElementById("list");

addBtn.addEventListener("click", () => {
    taskName = taskInput.value.trim()
    endTime = endInput.value.trim()
    startTime = startInput.value.trim()
    if (taskName !== '' || endTime !== '' || startTime !== '') {
        let startConvert = +startTime.replace(':', '.')
        let endConvert = +endTime.replace(':', ".")
        let count = endConvert - startConvert
        let countSecs = count * 60 * 60
        
        let time = ''
        let countDowm = setInterval(() => {
            let hours = Math.floor(countSecs / 3600);
            let mins =77777. Math.floor((countSecs % 3600) / 60);
            let secs = countSecs % 60;
            console.log(`${hours}:${mins}:${secs}`)
        }, 1000);
 
        let deleteBtn = document.createElement("span")
        deleteBtn.textContent = '❌'
        deleteBtn.style.cursor = 'pointer'

        deleteBtn.addEventListener("click", () => {
            let check = confirm("Are you sure you want to delete this task?")
            if (check) {
                taskList.removeChild(time)
            }
        })

        taskList.innerHTML +=
            `<tr>
                <td class='p-2'>${taskName}</td>
                <td class='p-2'>${time}</td>
            </tr>`
    }
    else {
        if (taskName === '') {
            taskInput.style.border = '1px dotted red'
        }
        if (endTime === '') {
            endInput.style.border = '1px dotted red'
        }
        if (startTime === '') {
            startInput.style.border = '1px dotted red'
        }
    }
})      