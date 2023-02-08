// 동물우너에 동물이 3마리 있다.
// 각 동물별 정보는 이름, 종, 나이이다.
function Animal(name, species, age){
    this.name = name;
    this.species = species;
    this.age = age;
}

let zoo = [
    new Animal('호랭이','호랑이', 9),
    new Animal('김동한','돼지', 10),
    new Animal('정지영','멸치', 8)
];
let zooJSON = JSON.stringify(zoo);
// let JSONzoo =JSON.parse(zooJSON);

// 동물원의 동물 전체 평균 나이를 구한다.
function age(zooJSON, callback){
    let zoo = JSON.parse(zooJSON);
    let age = zoo.map(zoo => zoo.age) 
    let total = age.reduce((age,b) => age + b);
    
    if(callback){
        callback(total / zoo.length)
        return;
    }
    return total;
}
console.log(age(zooJSON, total => {console.log(Math.floor(total))}));