let btn=document.getElementById("forms");
btn.addEventListener("submit",addDetail);
let ul=document.getElementById("ul");
ul.addEventListener("click",deleteItem)
function addDetail(e){
    e.preventDefault();
    var obj={
        Name:document.getElementById("name").value,
        Eamil:document.getElementById("email").value,
        Mobile:document.getElementById("mobile").value
    }
    var objSerialize=JSON.stringify(obj);
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(objSerialize));
    let btn=document.createElement("button");
    btn.innerText="Delete";
    btn.className="Delete";
    li.appendChild(btn);
    ul.appendChild(li);    
    localStorage.setItem(`${objSerialize}`,objSerialize);
}

function deleteItem(e) {
    e.preventDefault();
    if(e.target.classList.contains("Delete")){
        let li=e.target.parentNode;
        console.log(li.firstChild);
        localStorage.removeItem(li.firstChild);
        ul.removeChild(li);        
    }
}