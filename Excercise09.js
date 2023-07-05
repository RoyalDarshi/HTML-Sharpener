let btn=document.getElementById("forms");
btn.addEventListener("submit",addDetail);
function addDetail(e){
    var obj={
        Name:document.getElementById("name").value,
        Eamil:document.getElementById("email").value,
        Mobile:document.getElementById("mobile").value
    }
    var objSerialize=JSON.stringify(obj);
    localStorage.setItem(obj.Eamil,objSerialize);
}