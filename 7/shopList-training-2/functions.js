//objeye yeni eleman ekleme fonksiyonu
let addObjectProductList = (pList, pName, pModel, pPrice) => {
    let newObject = {
        name: pName,
        model: pModel,
        price: pPrice
    }

    pList.push(newObject)
    
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
//                         <tbody id="table-body">
//                      ${productList.map(product => {
//                                return `
//                                       <tr>
//                                            <td>${product.name}</td>
//                                            <td>${product.model}</td>
//                                            <td>${product.price}</td>
//                                       </tr>
//                                       `
//                                       }).join("")}
//                        </tbody>
//                     </table>
//                 `
//     return template
// }