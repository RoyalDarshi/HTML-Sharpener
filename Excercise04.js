const btn=document.getElementById("btn");
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector("div").style.background="red";
    const name=document.getElementById("Name").value;
    const email=document.getElementById("Email").value;
    
if(name===""||email===""){
    const msg=document.getElementById("msg");
    msg.innerHTML="Please Provide a value";
    setTimeout(()=>msg.remove(),3000);
}
else{
    console.log(name);
    console.log(email);    
}
});
btn.addEventListener('mouseover',(e)=>{
    e.preventDefault();
    document.querySelector("body").style.background="yellow";
}); 
btn.addEventListener('mouseout',(e)=>{
    e.preventDefault();
    document.querySelector("body").style.background="white";
});