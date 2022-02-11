let render = (pId, pValue) => {
    document.querySelector(`${pId}`).innerHTML = pValue;
}


let productView = () => {
    let template = productList.map((product, index) => {
        return `
               <tr>
                    <td><i class="far fa-plus-square fa-lg text-success" onclick="addShowList(${index})"></i></td>
                    <td>${product.name}</td>
                    <td>${product.model}</td>
                    <td>${product.price}</td>
                    <td><i class="fas fa-trash text-danger" onclick="deleteProduct(${index})"></i></td>
               </tr>
               `
    }).join("")

    return template
}



//cardlist render

let cardView = () => {
    let template = showList.map((product,index) => {
    return `
   
    <div class="card col-lg-3 ms-5 mt-5" style="width: 14rem;">
        <img src="https://puri.sm/wp-content/uploads/2021/07/l5-v1-front-3-shadow.png"
            class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title"><strong>${product.name}</strong></h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>Model:</strong> ${product.model}</li>
            <li class="list-group-item"><strong>Price:</strong> ${product.price}$</li>
            <li class="list-group-item"><i class="fas fa-minus-square text-danger" onclick="addProductList(${index})"></i> Back to product list</li>
        </ul>

    </div>
  
    
    `
    })

    return template
}















// let tableView = () => {
//     let template = `
//                     <table class="table">
//                         <thead>
//                             <tr>

//                                 <th scope="col">Product name</th>
//                                 <th scope="col">Product model</th>
//                                 <th scope="col">Product price</th>
//                             </tr>
//                         </thead>
//                         <tbody id="table-body">`
//                         productList.map(product => {
//                                template += `
//                                            <tr>
//                                                 <td>${product.name}</td>
//                                                 <td>${product.model}</td>
//                                                 <td>${product.price}</td>
//                                            </tr>
//                                            `
//                                            }).join("")

//                     template +=  ` </tbody>
//                     </table>
//     `
//     return template
// }