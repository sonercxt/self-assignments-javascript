render("#table-body", productView())
render("#card-list", cardView())


let inputName = document.getElementById("input-name")
let inputModel = document.getElementById("input-model")
let inputPrice = document.getElementById("input-price")



document.getElementById("btn-add").addEventListener("click", () => {

    addObjectProductList(productList, inputName.value, inputModel.value, inputName.value)
    render("#table-body", productView())

    localStorage.setItem("productList", JSON.stringify(productList))
    JSON.parse(localStorage.getItem("productList"))

})



//product list delete butonu
let deleteProduct = (pIndex) => {
    productList.splice(pIndex, 1)
    console.log(productList)
    render("#table-body", productView())

}

//add butonu show liste ekle

let addShowList = (pIndex) => {
    let addToShowList = productList[pIndex]
    addObjectProductList(showList, addToShowList.name, addToShowList.model, addToShowList.price)
    render("#card-list", cardView())

    productList.splice(pIndex, 1)
    render("#table-body", productView())

    console.log(showList)
}

// add again product list

let addProductList = (pIndex) => {
    let backToProductList = showList[pIndex]
    addObjectProductList(productList, backToProductList.name, backToProductList.model, backToProductList.price)
    render("#table-body", productView())

    showList.splice(pIndex, 1)
    render("#card-list", cardView())


}