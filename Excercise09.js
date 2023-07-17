let btn=document.getElementById("forms");
btn.addEventListener("submit",addDetail);
let ul=document.getElementById("ul");
function addDetail(e){
    e.preventDefault();
    let obj={
        Name:document.getElementById("name").value,
        Eamil:document.getElementById("email").value,
        Mobile:document.getElementById("mobile").value
    }
    let objSerialize=JSON.stringify(obj);
    let li=document.createElement("li");
    li.appendChild(document.createTextNode(objSerialize));
    let btn=document.createElement("button");
    btn.innerText="Delete";
    btn.className="Delete";
    btn.onclick=()=>{
        localStorage.removeItem(obj.Eamil);
        ul.removeChild(li);
    }
    li.appendChild(btn);
    let btnEdit=document.createElement("button");
    btnEdit.innerText="Edit";
    btnEdit.className="Edit";
    btnEdit.onclick=()=>{
        localStorage.removeItem(obj.Eamil);
        ul.removeChild(li);
        document.getElementById("name").value=obj.Name;
        document.getElementById("email").value=obj.Eamil;
        document.getElementById("mobile").value=obj.Mobile;
    }
    li.appendChild(btnEdit);
    ul.appendChild(li);    
    localStorage.setItem(obj.Eamil,objSerialize);
}

// function deleteItem(e) {
//     e.preventDefault();
//     if(e.target.classList.contains("Delete")){
//         let li=e.target.parentNode;
//         console.log(li.firstChild);
//         localStorage.removeItem(li.firstChild);
//         ul.removeChild(li);        
//     }
//     else if(e.target.classList.contains("Edit")){
//         let li=e.target.parentNode;
//         console.log(li.firstChild);
//         localStorage.removeItem(li.firstChild);
//         ul.removeChild(li);
//     }
// }