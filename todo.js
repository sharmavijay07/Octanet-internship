let todoList=[];

let todoElement=document.querySelector('#todoInput');
let dateElement=document.querySelector('#dateInput');
function addElement(){
    let currentVal1=todoElement.value;
    let dateval=dateElement.value;
    let obj={
        item:currentVal1,
        date:dateval,
    }
todoList.push(obj);

todoElement.value='';
dateElement.value=null;
displayElement();
console.log(todoList);
}
 
function displayElement(){
    let element=document.querySelector('#elementToShow');
    let inHtml='';
    let currobj;
    
    for(let i=0;i<todoList.length;i++){
       currobj=todoList[i];
    
    inHtml+=`
    <pre><span>${currobj.item}   ${currobj.date}</span>  <button onclick="
    todoList.splice(${i},1);
    displayElement();
    console.log(todoList);
    ">Delete</button></pre>
    <br>
    `;
    
     
    }
    element.innerHTML=inHtml;
   
}
