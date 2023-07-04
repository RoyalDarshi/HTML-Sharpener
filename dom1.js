var form=document.getElementById("addForm");
var item=document.getElementById("items");
var search=document.getElementById("filter");
search.addEventListener("keyup",filter)
form.addEventListener("submit",addList);
item.addEventListener("click",deleteItem);
function addList(e){
    e.preventDefault();
    var newItem=document.getElementById("item").value;
    var newLi=document.createElement("li");
    newLi.appendChild(document.createTextNode(newItem));
    newLi.className="list-group-item";
    var deleteBtn=document.createElement("button");
    deleteBtn.innerText="X";
    deleteBtn.className="btn btn-danger btn-sm float-right delete";
    newLi.appendChild(deleteBtn);
    item.appendChild(newLi);    
}

function deleteItem(e) {
    if(e.target.classList.contains("delete")){
        if(confirm("Are you sure ?")){
            var li=e.target.parentNode;
            item.removeChild(li);
        }
    }
}

function filter(e){
    e.preventDefault();
    var text=e.target.value.toLowerCase();
    var items=document.getElementsByTagName("li");
    Array.from(items).forEach(function(list){
        var itemName=list.firstChild.textContent.toLowerCase();
        if(itemName.indexOf(text)!=-1){
            list.style.display="block";
        }
        else{
            list.style.display="none";
        }
    })
}