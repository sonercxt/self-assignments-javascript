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

let electronicStuff = () => {
   return document.getElementById("electronic-stuff").innerHTML = 
    electronics.map((product,index)=>{
     return ` <li class="list-group-item d-flex justify-content-between align-items-center" onclick="products(${index})">${product.categories}</li>`
    }).join("")
  
    
}


let products = (pIndex) =>{
    
} 
// let electronics = [{
//     categories: "Computer",
//     products: [{
//             productName: "Asus",