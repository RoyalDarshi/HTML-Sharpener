// var title=document.getElementById("main-header");
// console.log(title);
// title.style.borderBottom='solid 3px black';
// var item=document.getElementsByTagName("h2");
// item[0].innerHTML='<bold>Add Items</bold>';
// item[0].style.color="green";
// var items=document.getElementsByClassName("list-group-item");
// items[2].style.backgroundColor="green";
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight="bold";
// }
// var li=document.getElementsByTagName("li");
// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor="gray";
//     li[i].style.padding="5px";
// }
// var lisec=document.querySelector(".list-group-item:nth-child(2)");
// lisec.style.backgroundColor="green";
// var lithird=document.querySelector(".list-group-item:nth-child(3)");
// lithird.style.display="none";
// var odd=document.querySelectorAll(".list-group-item:nth-child(odd)");
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor="green";
// }
var form=document.querySelector("form");
console.log(form);
console.log(form.parentNode);
console.log(form.lastElementChild);
console.log(form.lastChild);
console.log(form.firstElementChild);
console.log(form.lastChild);
console.log(form.firstChild);
console.log(form.nextSibling);
console.log(form.nextElementSibling);
console.log(form.previousElementSibling);
console.log(form.previousSibling);
var div=document.createElement("div");
div.setAttribute("title","hello");
console.log(div);
var text=document.createTextNode("Hello 3");
var container=document.querySelector("header .container");
var h1=document.querySelector(".container h1");
div.appendChild(text);
div.style.fontSize="30px";
container.insertBefore(div,h1);
var li=document.createElement("li");
var text1=document.createTextNode("Hello 3");
li.appendChild(text1);
var container1=document.querySelector("ul");
var ul=document.querySelector("li");
container1.insertBefore(li,ul);
