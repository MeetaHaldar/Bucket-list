let form = document.getElementById("form");
let input=document.getElementById("myInput");
let theList=document.getElementById("theList");
let btn =document.getElementById("addItem");

btn.disabled = true;

input.addEventListener("change", stateHandle);

function stateHandle() {
    if(input.value==="") {
        btn.disabled = true;
       
    } else {
        btn.disabled = false;
    
    }
}

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    createItem(myInput.value);
}
)
function createItem(x)
{
    let outHTML =`<li class="shadow rounded">${x}  <button class="btn" onclick ="deleteItem(this)"> <i class="fas fa-trash-alt m-2"></i> </button></li>`;
    theList.insertAdjacentHTML("beforeend",outHTML);
    myInput.value='';
    myInput.focus()
    btn.disabled = true;
}


function deleteItem(y){
y.parentElement.remove();

}
// function cutit(y)
// {
//     y.parentElement.style.  
// }