let electronics = [{
        categories: "Computer",
        products: [{
                productName: "Asus",
                price: 500,
                color: "black"
            },
            {
                productName: "Apple",
                price: 1000,
                color: "gray"
            },
            {
                productName: "HP",
                price: 700,
                color: "pink"
            }
        ]
    },

    {
        categories: "Phone",
        products: [{
                productName: "Samsung",
                price: 300,
                color: "black"
            },
            {
                productName: "Iphone",
                price: 800,
                color: "red"
            },
            {
                productName: "Huawei",
                price: 250,
                color: "white"
            }
        ]
    },

    {
        categories: "TV",
        products: [{
                productName: "LG",
                price: 900,
                color: "black"
            },
            {
                productName: "Philips",
                price: 1100,
                color: "gray"
            },
            {
                productName: "Sony",
                price: 1400,
                color: "white"
            }
        ]
    }



]

//console.log(electronics[1].products[1])

let electronicStuffAssign = () => {
    return document.getElementById("electronic-stuff").innerHTML =
        electronics.map((product, index) => {
            return ` <li class="list-group-item d-flex justify-content-between align-items-center" onclick="productAssign()">${product.categories}
     <span class="badge bg-primary rounded-pill">${index}</span></li>`
        }).join("")
}


let productAssign = () => {
    //  let productProperty = electronics[pIndex].products;
    return document.getElementById("product-list").innerHTML = electronics.map((product, index) => {
        let productProperty = product.products[index];

        return ` <div class="card" style="width: 12rem;">
        <img src="https://cdn.britannica.com/w:400,h:300,c:crop/77/170477-050-1C747EE3/Laptop-computer.jpg"
            class="card-img-top" alt="...">

        <ul class="list-group list-group-flush">
            <li class="list-group-item">${productProperty.productName}</li>
            <li class="list-group-item">${productProperty.price}</li>
            <li class="list-group-item">${productProperty.color}</li>
        </ul>

         </div>`
    }).join("")

}

// let electronics = [{
//     categories: "Computer",
//     products: [{
//             productName: "Asus",