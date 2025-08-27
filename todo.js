let todoListArray = []
let completedListArray = []
document.getElementById('submitTodo').addEventListener('click', ()=>{
    let todoInput = document.getElementById('todoInput').value ;
    if(!todoInput){
        alert("Please enter your todos")
        return;
    }
    todoListArray.push({todoInput});
    renderTodo();
    document.getElementById('todoInput').value = "";
})

function renderTodo(){
    let addtodo = "";
    let showtodos = document.getElementById('showtodos');
    todoListArray.forEach((todoData, index) =>{
    const{todoInput} = todoData;
    addtodo += `
        <div class='todo'>
            <input type="checkbox" onclick ="checkBox(${index})">
            <!--<div> ${index+1}</div>-->
            <div> ${todoInput} </div>
            <button onclick="deleteTodo(${index})"><i class="material-icons" style="font-size:20px;color:red">delete</i></button>
        </div> 
    `
        
    })
    
    //Completed part
    let addcompletedtodo = "";
    let showcompleted = document.getElementById('showcompleted');
    completedListArray.forEach((todoData, index) =>{
    const{todoInput} = todoData;
    addcompletedtodo += `
        <div class='todo'>
            <input type="checkbox" checked disabled>
            <div> ${todoInput} </div>
            <button onclick="deleteCompletedTodo(${index})"><i class="material-icons" style="font-size:20px;color:red">delete</i></button>
        </div> 
    `  
    })
    showcompleted.innerHTML = `${addcompletedtodo}`
    showtodos.innerHTML = `${addtodo}`
 
}

function deleteTodo(index){
    todoListArray.splice(index, 1);
    renderTodo()
}

function deleteCompletedTodo(index){
    completedListArray.splice(index, 1);
    renderTodo();
}

function checkBox(index){
    if(event.target.checked){ 
        completedListArray.push(todoListArray.splice(index, 1)[0])
        renderTodo();
    }
}