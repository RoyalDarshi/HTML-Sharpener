let form = document.getElementById("forms");
form.addEventListener("submit", addDetail);
let ul = document.getElementById("ul");
function addDetail(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let qty = document.getElementById("qty").value;
    let price = document.getElementById("price").value;
    let obj = {
        "Name: ": name,
        "Qty: ": qty,
        "Price: ":price
    };
    console.log(obj);
    // localStorage.setItem(name, JSON.stringify(obj));
    // document.getElementById("name").value = "";
    // document.getElementById("qty").value = "";
    // document.getElementById("price").value = "";
    // let li = document.createElement("li");
    // li.innerHTML = `Product Name: ${name} ; Qty: ${qty} ; Price: ${price}   `;
    // let deleteBtn = document.createElement("button");
    // deleteBtn.innerText = "Delete";
    // deleteBtn.classList = "btn btn-danger m-2";
    // deleteBtn.addEventListener("click", () => {
    //     ul.removeChild(li);
    //     localStorage.removeItem(name);
    // });
    axios.post("https://crudcrud.com/api/a9ea33ab6bda45ebadb09e724f45c403/expenceTracker", obj).then(res => console.log(res))
        .catch(err => console.log(err));

    // li.appendChild(deleteBtn);
    // let editBtn = document.createElement("button");
    // editBtn.innerText = "Edit";
    // editBtn.classList = "btn btn-warning";
    // editBtn.addEventListener("click", () => {
    //     ul.removeChild(li);
    //     localStorage.removeItem(name);
    //     document.getElementById("name").value = name;
    //     document.getElementById("qty").value = qty;
    //     document.getElementById("price").value = price;
    // });
    // li.appendChild(editBtn);
    // ul.appendChild(li);
}
window.addEventListener("load", () => {
    for (let i = 0; i < localStorage.length; i++){
        let name = "Name: ";
        let qty = "Qty: ";
        let price = "Price: ";
        let prod = localStorage.getItem(localStorage.key(i));
        let syncProd = JSON.parse(prod);
        let li = document.createElement("li");
        li.innerHTML = `Product Name: ${syncProd[name]} ; Qty: ${syncProd[qty]} ; Price: ${syncProd[price]}   `;
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.classList = "btn btn-danger m-2";
        deleteBtn.addEventListener("click", () => {
            ul.removeChild(li);
            localStorage.removeItem(syncProd[name]);
        });

        li.appendChild(deleteBtn);
        let editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.classList = "btn btn-warning";
        editBtn.addEventListener("click", () => {
            ul.removeChild(li);
            localStorage.removeItem(syncProd[name]);
            document.getElementById("name").value = syncProd[name];
            document.getElementById("qty").value = syncProd[qty];
            document.getElementById("price").value = syncProd[price];
        });
        li.appendChild(editBtn);
        ul.appendChild(li);
    }
})