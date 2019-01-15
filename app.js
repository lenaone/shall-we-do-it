var todoItems = document.querySelectorAll('li');
var addBtn = document.querySelector('.add-btn');
var newTodoInput = document.querySelector('.new-todo-input');
var todoList = document.querySelector('.todo-list');
var form = document.querySelector('form');
var completedCountSpan = document.querySelector('.completed-count-span');
var footer = document.querySelector('footer');
var resetBtn = document.querySelector('.reset-btn');


var checkAllDone = function() {

    if (document.querySelectorAll(".completed").length === document.querySelectorAll('li').length) {
        footer.classList.remove('hidden');
    } else {
        footer.classList.add('hidden');
    }

}


var resetAllItems = function() {
    
    var allItems = document.querySelectorAll('.completed');
    
    // for (var i=0; i<allItems.length; i++) {
    //     allItems[i].classList.remove('completed');
    // }

    allItems.forEach( function(Items) {
        Items.classList.remove('completed');
    })

    completedCountSpan.textContent = document.querySelectorAll(".completed").length;
    

}


var markComplete = function(event) {
    
    // if (event.target.classList.contains('completed')) {
    //     event.target.classList.remove("completed");
    // } else {
    //     event.target.classList.add("completed");
    // }
    
    event.target.classList.toggle('completed');
    // event.target.style.textDecoration = "line-through";
    // event.target.style.color = "grey";
    completedCountSpan.textContent = document.querySelectorAll(".completed").length;
    checkAllDone();
}




var addTodoItem = function(event) {
    event.preventDefault();
    console.log('adding items');

    // create new <li>
    var newListItem = document.createElement('li');
    // that class add it in newListItem
    newListItem.classList.add('todo-item');
    //newListItem.className = "todo-item";

    //Input value can show on the html as create <li>
    newListItem.textContent = newTodoInput.value

    //when click, line-through is working 
    newListItem.addEventListener('click', markComplete);

    //below the todolist, push it newListItem ==> <li>
    todoList.appendChild(newListItem);

    newTodoInput.value = "";// clear input box

    checkAllDone();


}

// for (var i=0; i<todoItems.length; i++) {
//     todoItems[i].addEventListener('click', markComplete)
    
// }

todoItems.forEach(function(todoItems) {

    todoItems.addEventListener('click',markComplete)

})

//addBtn.addEventListener('click', addTodoItem);

resetBtn.addEventListener('click', resetAllItems);
form.addEventListener('submit', addTodoItem);




// var firstItem = document.querySelector('li');

// function crossItOut() {
//     firstItem.style.textDecoration = "line-through";
// }

// firstItem.addEventListener('click', crossItOut);