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
var lisec=document.querySelector(".list-group-item:nth-child(2)");
lisec.style.backgroundColor="green";
var lithird=document.querySelector(".list-group-item:nth-child(3)");
lithird.style.display="none";
var odd=document.querySelectorAll(".list-group-item:nth-child(odd)");
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor="green";
}
