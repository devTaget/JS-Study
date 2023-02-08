// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
// JSON으로 변경시킨다.

// shop.json 에 변환된 JSON 형식의 문자열을 작성한다.
// shop.json을 읽어 온뒤 Array 객체로 변환한다.
// 총 가격과 총 재고 수를 Object에 담은 뒤 sum.json으로 출력한다.
let file = require('fs');

// file.writeFile('shop.json', productsJSON, 'utf-8', function(error){
    //         if(error){
        //             console.log(error)
        //         }else{
            //             console.log("성공!")
            //         }
            //     });
            
            
            file.readFile('product.json', 'utf-8', function(error, content) {
                if(error){
                    console.log(error);
                }else{
                    console.log(JSON.parse(productsJSON));
                }
            });


            function Product(name, price, stock) {
                this.name = name;
                this.price = price;
                this.stock = stock;
            }
            
            let products = [
                new Product('참후레쉬', 1500, 90),
                new Product('처음처럼', 1500, 60),
                new Product('막걸리', 1500, 30)
            ];
            
            let productsJSON = JSON.stringify(products);
            
function getTotals(productsJSON, callback) {
    let products = JSON.parse(productsJSON);
    let totalPrice = products.map(product => product.price).reduce((product, price) => product + price);
    console.log(`total : `+totalPrice);
    let totalStock = products.map(product => product.stock).reduce((product, stock) => product + stock);
    
    if(callback){
        return callback(totalPrice,totalStock);
    }
}

let arr = getTotals(productsJSON, (totalPrice,totalStock) => [totalPrice,totalStock]);


let arrJSON = JSON.stringify(arr);
// console.log(arrJSON);

file.writeFile('sum.json', arrJSON, 'utf-8', function(error){
 if(error){
    console.log(error)
    }else{
    console.log("성공!")
    }
});

// 각 상품별 총 가격을 구한 뒤 출력한다.
// callback 함수를 사용한다.
// 외부에서는 JSON 데이터가 전달된다.
