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
    localStorage.setItem(name, JSON.stringify(obj));
    document.getElementById("name").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("price").value = "";
    let li = document.createElement("li");
    li.innerHTML = `Product Name: ${name} ; Qty: ${qty} ; Price: ${price}   `;
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList = "btn btn-danger m-2";
    deleteBtn.addEventListener("click", () => {
        ul.removeChild(li);
        localStorage.removeItem(name);
    });
    
    li.appendChild(deleteBtn);
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList = "btn btn-warning";
    editBtn.addEventListener("click", () => {
        ul.removeChild(li);
        localStorage.removeItem(name);
        document.getElementById("name").value = name;
        document.getElementById("qty").value = qty;
        document.getElementById("price").value = price;
    });
    li.appendChild(editBtn);
    ul.appendChild(li);
}