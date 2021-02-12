'use strict'

const remainingCount = document.getElementById("todoRemaining");
// const activeCount = document.getElementById(to)

function saveTodo() {
    let currentDateAndTime = new Date();
    let newTodo = document.getElementById("todo_input").value;
    // If i need to add in date/time, look at notes from note_it

    let storedTodoString = localStorage.getItem("all_todo");
    let allTodo = JSON.parse(storedTodoString);
    if (allTodo == null) {
        allTodo = []
    }
    allTodo.push(newTodo);
    let allTodoString = JSON.stringify(allTodo);
    localStorage.setItem("all_todo", allTodoString);
    showAllTodo();
    document.getElementById("todo_input").value = null;
}

function showAllTodo() {
    let storedTodoString = localStorage.getItem("all_todo");
    let allTodo = JSON.parse(storedTodoString);
    if (allTodo != null) {
        let todoDisplayer = document.getElementById("all_todo_display");
        todoDisplayer.innerHTML = null;
        let numberOfTodo = allTodo.length;
        for (let i = 0; i < numberOfTodo; i++) {
            let todo = allTodo[i];
            // Check to see if I can remove id creation
            // todoDisplayer.innerHTML += "<p id=" + [i] + " onclick='deleteTodo(" + [i] + ")'><input type='checkbox' id='select'>" + todo + "<button id='delete'>X</button></p>";
            todoDisplayer.innerHTML += "<div class='listItem'><input type='checkbox' id='select' onchange='countTodo()' onclick='saveTodo()'><label class='strikethrough'>" + todo + "</label><a id='delete' onclick='deleteTodo(" + [i] + ")'>X</a></div>";
            console.log(i);
        }

    }
    // console.clear();
    countTodo();
}

// function confirmCheck() {
//     let checkedTodo = allTodo.find()
// }

function deleteTodo(i) {
    let todoItem = JSON.parse(localStorage.getItem("all_todo"));
    console.log(todoItem);
    console.log(i);
    console.log("Before splice");
    todoItem.splice(i, 1);
    console.log("After splice");
    console.log(JSON.stringify(todoItem));
    localStorage.setItem("all_todo", JSON.stringify(todoItem));
    showAllTodo();
}

// let count = document.getElementsByTagName("input").type == "checkbox"
// let count = document.getElementsById("select");
// count.addEventListener('change', saveTodo);
// var checkbox = document.querySelectorAll('input[type="checkbox"]');
// for (let i = 0; i < checkbox.length; i++) {
//     checkbox[i].addEventListener('change', saveTodo);
// }

// function saveTodo() {
//     let todoChecked = localStorage.getItem("all_todo");
//     console.log(todoChecked);
//     let values = todoChecked.map(function(chk) {
//         return chk.checked ? 1 : 0;
//     });
//     console.log(values);
//     return localStorage.setItem('chk', JSON.stringify(values));
// }

function saveTodo() {
    // let checkItem = JSON.parse(localStorage.getItem("all_todo"));
    // console.log(checkItem);
    let checkboxes = document.querySelectorAll('input[type=checkbox]');
    console.log(checkboxes);
    for (let i = 0; i < checkboxes.length; i++) {
        // console.log(checkboxes[i].value);
        console.log(checkboxes[i].checked);
        // localStorage.setItem(checkboxes[i].value, checkboxes[i].checked);
        if(checkboxes[i].checked) {
            // checkboxes[i].checked = true;
            localStorage.setItem(checkboxes[i].checked, true);
        } else {
            // checkboxes[i].checked = false;
            localStorage.setItem(checkboxes[i].checked, false);
        }
    // }
    // console.log(JSON.stringify(checkboxes));
    // localStorage.setItem("all_todo", JSON.stringify(checkItem));



    // let values = todoChecked.map(function (chk) {
    //     return chk.checked ? 1 : 0;
    // });
    // console.log(values);
    // return localStorage.setItem('chk', JSON.stringify(values));
}
}

// function countTodo() {
//     let countTodo = localStorage.getItem("all_todo"),
//     count = 0;
//     for (let i = 0; i < countTodo.length; i++) {
//         if (countTodo[i].type == "checkbox" && countTodo[i].check === true) {
//             count++;
//         }
//         console.log(count);
//     }
// }



function countTodo() {
    // var checkbox = document.querySelectorAll('input[type="checkbox"]');
    // for (let i = 0; i < checkbox.length; i++) {
    //     checkbox[i].addEventListener('change', saveTodo);
    // }
    let total = document.querySelectorAll('input[type="checkbox"]').length;
    let checked = document.querySelectorAll('input[type="checkbox"]:checked').length;
    // let unchecked = document.querySelectorAll('input[type="checkbox"]').length;
    remainingCount.innerHTML = total - checked;
    // completedCount.innerHTML = 
    // activeCount.innerHTML = unchecked;
    // localStorage.setItem("all_todo", JSON.stringify(todoItem));
}