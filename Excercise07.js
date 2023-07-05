let btn=document.getElementById("forms");
btn.addEventListener("submit",addDetail);
function addDetail(e){
    e.preventDefault();
    localStorage.setItem("Name",document.getElementById("name").value);
    localStorage.setItem("Email",document.getElementById("email").value);
    localStorage.setItem("Mobile",document.getElementById("mobile").value);
}