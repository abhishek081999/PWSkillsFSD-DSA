function addtodo(){
    let todo= document.getElementById("submittodo").value;
    let status="pending"
    let mainDiv = document.createElement("div");
    mainDiv.className="todo";
    
    let h1=document.createElement("h1")
    h1.id="task"
    h1.textContent=`${todo}`;
    mainDiv.appendChild(h1);
    

    let p=document.createElement("p")
    p.textContent=`Status: ${status}`;
    mainDiv.appendChild(p);

    let div=document.createElement("div")
    div.textContent=`Remove`;
    div.className="capsule-white"
    mainDiv.appendChild(div);
    
    let div1=document.createElement("div")
    div1.textContent=`Mark Completed`;
    div1.className="capsule-green"
    div1.onclick="markComplete()"
    div1.addEventListener('click',markComplete);
    div1.id="status"
    mainDiv.appendChild(div1);

    let div2=document.createElement("div")
    div2.textContent=`Edit Task`;
    div2.className="capsule-white";
    div2.addEventListener('click',editTodo);
    mainDiv.appendChild(div2);
    
    
    document.getElementById("maincontainer").appendChild(mainDiv);

}



function markComplete(){
    document.getElementById("status").innerHTML='Status: Complete';
    document.getElementById("status").className='capsule-yellow';
}

function editTodo(){
    document.getElementById("hide").id='updateTodoItem';
}

function updateTodo(){
    let newVal=document.getElementById("updateTodo").value

    document.getElementById("task").textContent=newVal
    
}
function closeTodo()
{
    
document.getElementById("updateTodoItem").id='hide';
}

