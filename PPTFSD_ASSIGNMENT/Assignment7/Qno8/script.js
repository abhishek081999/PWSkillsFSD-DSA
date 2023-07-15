function addtodo(){
    let todo= document.getElementById("submittodo").value;
    console.log(todo)
    let mainDiv = document.createElement("div");
    mainDiv.className="todo";
    
    let h1=document.createElement("h1")
    h1.textContent=`${todo}`;
    mainDiv.appendChild(h1);
    

    let p=document.createElement("p")
    p.textContent=`Status: pending`;
    mainDiv.appendChild(p);

    let div=document.createElement("div")
    div.textContent=`Remove`;
    div.className="capsule-white"
    mainDiv.appendChild(div);
    
    let div1=document.createElement("div")
    div1.textContent=`Mark Completed`;
    div1.className="capsule-green"
    mainDiv.appendChild(div1);

    let div2=document.createElement("div")
    div2.textContent=`Edit Task`;
    div2.className="capsule-white"
    mainDiv.appendChild(div2);
    
    console.log(mainDiv);  
    document.getElementById("maincontainer").appendChild(mainDiv);

}