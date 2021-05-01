//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");  

//Events
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click",deleteCheck);
filterOption.addEventListener("click",filterTodo)
                                 
                                       
//Functions
function addTodo(event) {
  console.log("outpu");  
  // prevent form from submitting
  event.preventDefault();
  // creat todoDiv
  const todoDiv = document.createElement("div"); 
  todoDiv.classList.add("todo");
  //create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  //1. append li to todoDiv
  todoDiv.appendChild(newTodo);
  //CREATE CHECK MARK BUTTON
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
   
  completedButton.classList.add("complete-btn");
  
  //2.adding button to todoDiv(todo)
  todoDiv.appendChild(completedButton);
  // CREATE TRASH BUTTON
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");

  // 3.adding delete button todoDiv
  todoDiv.appendChild(trashButton);
  // APPPEND ALL THIS STUFF TO todoList
  todoList.appendChild(todoDiv);
  // Clear todoInput value
  todoInput.value="";   
}


function deleteCheck(event){
      const item =  event.target;  //  2 items - targetting them

    // DELETER TODO
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        //Animation 
        todo.classList.add("fall");
        todo.addEventListener("transitionend",function(){
              todo.remove(); 
        });
    }

    //CHECK MARK
    if(item.classList[0] === "complete-btn"){
      const todo = item.parentElement;
      todo.classList.toggle("completed");
    }
}

function filterTodo(e){
   const todos = todoList.childNodes;
     todos.forEach(function(todo){
       switch(e.target.value){
           case "all":
           todo.style.display="flex";
           break;
        
            case "completed":
            if(todo.classList.contains("completed")){
              todo.style.display = "flex";
            }else{
              todo.style.display = "none";
            }
            break;

            case "uncompleted":
              if(!todo.classList.contains("completed")){
                todo.style.display = "flex";
              }else{ 
                todo.style.display = "none";

              }
              break;
       }
              
     });


}
