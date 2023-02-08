// 상품명, 가격, 재고를 JS 객체에 프로퍼티로 담는다.
// JSON 형식으로 변환한 뒤 , product.json 으로 출력한다.
// product.json 에 있는 JSON 형식을 JS object 타입으로 변환하여 각 프로퍼디를 출력한다.
let file = require('fs');

function Product(name, price, stock){
    this.name = name;
    this.price = price;
    this.stock = stock;
}

let products = [
    new Product('담배', 4500, 3),
    new Product('콘', 15000, 10)
];

let productsJSON = JSON.stringify(products);

// file.writeFile('product.json', productsJSON, 'utf-8', function(error){
//         if(error){
//             console.log(error)
//         }else{
//             console.log("성공!")
//         }
//     });

let JSONproducts = JSON.parse(productsJSON);

    file.readFile('product.json', 'utf-8', function(error, JSONproducts) {
    if(error){
        console.log(error);
    }else{
        console.log(JSONproducts);
    }
    });







