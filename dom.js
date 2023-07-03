// var title=document.getElementById("main-header");
// console.log(title);
// title.style.borderBottom='solid 3px black';
// var item=document.getElementsByTagName("h2");
// item[0].innerHTML='<bold>Add Items</bold>';
// item[0].style.color="green";
var items=document.getElementsByClassName("list-group-item");
items[2].style.backgroundColor="green";
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight="bold";
}