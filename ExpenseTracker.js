//const { data } = require("jquery");

let form = document.getElementById("forms");
form.addEventListener("submit", addDetail);
let ul = document.getElementById("ul");
function addDetail(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let qty = document.getElementById("qty").value;
    let price = document.getElementById("price").value;
    let obj = {
        Name: name,
        Qty: qty,
        Price: price
    };
    //console.log(typeof data)
    //console.log();
    // localStorage.setItem(name, JSON.stringify(obj));

    // axios.post("https://crudcrud.com/api/a9ea33ab6bda45ebadb09e724f45c403/expenseTracker",JSON.stringify(obj)).then(res => console.log(res))
    //     .catch(err => console.log(err));
    axios({
        method: 'post',
        url: 'https://crudcrud.com/api/a9ea33ab6bda45ebadb09e724f45c403/expenseTracker',
        data: obj
    })
        .then((res) => {
            console.log(res)
            document.getElementById("name").value = "";
            document.getElementById("qty").value = "";
            document.getElementById("price").value = "";
            let li = document.createElement("li");
            li.innerHTML = `Product Name: ${name} ; Qty: ${qty} ; Price: ${price}   `;
            let deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Delete";
            deleteBtn.classList = "btn btn-danger m-2";
            deleteBtn.addEventListener("click", () => {
                //console.log(res);
                let id = res.data._id;
                //console.log(res+" "+id)
                axios.delete(`https://crudcrud.com/api/a9ea33ab6bda45ebadb09e724f45c403/expenseTracker/${id}`)
                    .then(res => console.log(res))
                    .catch(err => console.log(err));
                ul.removeChild(li);
            });
            li.appendChild(deleteBtn);
            let editBtn = document.createElement("button");
            editBtn.innerText = "Edit";
            editBtn.classList = "btn btn-warning";
            editBtn.addEventListener("click", () => {
                let id = res.data._id;
                axios.delete(`https://crudcrud.com/api/a9ea33ab6bda45ebadb09e724f45c403/expenseTracker/${id}`)
                    .then(res => console.log(res))
                    .catch(err => console.log(err));
                ul.removeChild(li);
                document.getElementById("name").value = name;
                document.getElementById("qty").value = qty;
                document.getElementById("price").value = price;
            });
            li.appendChild(editBtn);            
            ul.appendChild(li);
        })
        .catch((err) => console.error(err))
}
window.addEventListener("load", () => {

    axios.get("https://crudcrud.com/api/a9ea33ab6bda45ebadb09e724f45c403/expenseTracker").then((res) => {
        console.log(res.data);
        for (const element of res.data) {
            let item = element;
            let li = document.createElement("li");
            li.innerHTML = `Product Name: ${item.Name} ; Qty: ${item.Qty} ; Price: ${item.Price}   `;
            let deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Delete";
            deleteBtn.classList = "btn btn-danger m-2";
            deleteBtn.addEventListener("click", () => {
                let id = item._id;
                axios.delete(`https://crudcrud.com/api/a9ea33ab6bda45ebadb09e724f45c403/expenseTracker/${id}`)
                    .then(res => console.log(res))
                    .catch(err => console.log(err));
                ul.removeChild(li);
            });
            li.appendChild(deleteBtn);
            let editBtn = document.createElement("button");
            editBtn.innerText = "Edit";
            editBtn.classList = "btn btn-warning";
            editBtn.addEventListener("click", () => {
                ul.removeChild(li);
                document.getElementById("name").value = item.Name;
                document.getElementById("qty").value = item.Qty;
                document.getElementById("price").value = item.Price;
            });
            li.appendChild(editBtn);
            ul.appendChild(li);
        }
    }).catch(err => console.log(err));
})