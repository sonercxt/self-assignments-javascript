let productName = document.getElementById("product-input")
let shopListName = document.getElementById("shop-list")
let cardListName = document.getElementById("card-list")
let rightButton = document.getElementById("btn-right")
let leftButton = document.getElementById("btn-left")
let deleteButton = document.getElementById("button-delete")

let shopArray = []
let cardArray = []

//onclick from add product to shopping list
let addToShopList = () => {
    if (productName.value !== "") {
        shopArray.push(productName.value)
        shopListRender();
        deleteAll();
        productName.value = ""
    } else {
        alert("Select a product!")
    }
}

//onclick add from shop list to cardlist
let addToCardList = (pIndex) => {
    let selectedProduct = shopArray[pIndex];
    cardArray.push(selectedProduct);

    //delete element from shoparray
    shopArray.splice(pIndex, 1)

    addCardListRender();
    shopListRender();


    console.log(shopArray, cardArray);
}

//add from cardlist to shoplist
let addFromCardListToShopList = (pIndex) => {
    let addAgainShopList = cardArray[pIndex]
    shopArray.push(addAgainShopList)
    /* shopListName.innerHTML = shopArray.map((product, index) => {
        return shopListName.innerHTML = `<li class="list-group-item d-flex justify-content-between">${product} <i class="fas fa-trash text-primary" onclick="addFromCardListToShopList(${index})"></i> </li>`
     }).join("")  
    */

    //delete element from cardarray
    cardArray.splice(pIndex, 1);

    shopListRender();
    addCardListRender();
}

//right button 
rightButton.addEventListener("click", () => {
    if (shopArray.length !== 0) {
        cardArray = cardArray.concat(shopArray);
        shopArray = [];
        shopListRender();
        addCardListRender();
        console.log(shopArray, cardArray);
    }
})

//left button
leftButton.addEventListener("click", () => {
    if (cardArray.length !== 0) {
        shopArray = shopArray.concat(cardArray);
        cardArray = [];
        shopListRender();
        addCardListRender();
        console.log(shopArray, cardArray);
    }
})

//onclick delete all
deleteAll = () => {
    deleteButton.innerHTML = `<button type="button" class="btn btn-danger mt-2 ms-3 " onclick="deleteAllList()">Delete</button>`

}

let deleteAllList = () => {
    shopArray = [];
    cardArray = [];
    shopListRender();
    addCardListRender();
    deleteButton.innerHTML = "";
}

//render
let shopListRender = () => {
    shopListName.innerHTML = shopArray.map((product, index) => {
        return `<li class="list-group-item d-flex justify-content-between">${product} <i class="fas fa-plus-square text-primary" onclick="addToCardList(${index})"></i> </li>`
    }).join("")
}

let addCardListRender = () => {
    cardListName.innerHTML = cardArray.map((product, index) => {
        return `<li class="list-group-item d-flex justify-content-between">${product} <i class="fas fa-trash text-danger" onclick="addFromCardListToShopList(${index})"></i> </li>`
    }).join("")
}