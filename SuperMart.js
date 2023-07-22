let form = document.getElementById("form");
form.addEventListener("submit", submitData);
let ulElect = document.getElementById("Electronics");
let ulFood = document.getElementById("Food");
let ulCloth = document.getElementById("Cloth");
let ulJwel = document.getElementById("Jwellery");
function submitData(e) {
    e.preventDefault();
    let name = document.getElementById("Name").value;
    let price = document.getElementById("Price").value;
    let category = document.getElementById("Category").value;
    let data = {
        Name: name,
        Price: price,
        Category: category
    }
    let resData;
    let ul;
    axios.post("https://crudcrud.com/api/cf613c199eb84d3c8ad7cf956764c93b/superMart", data).then(res => {
        resData = res;
        console.log(res)
    }).catch(err => console.log(err));
    let li = document.createElement("li");
    if (category == "Electronics") {
        ul = ulElect;
    }
    else if (category == "Food") {
        ul = ulFood;
    }
    else if (category == "Cloth") {
        ul = ulCloth;
    }
    else if(category=="Jwellery") {
        ul = ulJwel;
    }
    li.innerHTML = `Product Name: ${name} ; Price: ${price} ; Category: ${category}`;
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList = "btn btn-danger m-1";
    deleteBtn.addEventListener("click", (e) => {
        e.preventDefault();
        ul.removeChild(li);
        axios.delete(`https://crudcrud.com/api/cf613c199eb84d3c8ad7cf956764c93b/superMart/${resData._id}`).then(res => console.log(res))
            .catch(err => console.log(err));
    });
    li.appendChild(deleteBtn);
    ul.appendChild(li);
    document.getElementById("Name").value = "";
    document.getElementById("Price").value = "";
    document.getElementById("Category").value = "";
}
window.addEventListener("load", (e) => {
    e.preventDefault();
    axios.get("https://crudcrud.com/api/cf613c199eb84d3c8ad7cf956764c93b/superMart").then(res => {
        console.log(res);
        for (let i = 0; i < res.data.length;i++) {
            let li = document.createElement("li");
            li.innerHTML = `Product Name: ${res.data[i].Name} ; Price: ${res.data[i].Price} ; Category: ${res.data[i].Category}`;
            let ul;
            if (res.data[i].Category == "Electronics") {
                ul = ulElect;
            }
            else if (res.data[i].Category == "Food") {
                ul = ulFood;
            }
            else if (res.data[i].Category == "Cloth") {
                ul = ulCloth;
            }
            else if (res.data[i].Category=="Jwellery") {
                ul = ulJwel;
            }
            let deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Delete";
            deleteBtn.classList = "btn btn-danger m-1";
            deleteBtn.addEventListener("click", (e) => {
                e.preventDefault();
                ul.removeChild(li);
                axios.delete(`https://crudcrud.com/api/cf613c199eb84d3c8ad7cf956764c93b/superMart/${res.data[i]._id}`).then(res => console.log(res))
                    .catch(err => console.log(err));
            });
            li.appendChild(deleteBtn);
            ul.appendChild(li);
        }
    })
})