// 1~10 까지 Array객체에 담은 후 짝수만 출력
let nums = Array.from({ length: 10 }, (v, i) => i + 1);

nums.filter(v => v % 2 == 0).forEach(v => console.log(v));


// 한글을 정수로 변경
let korean = "공일이삼사오육칠팔구";
let kor = "일공이사";
// let korInvertedToInt = ""
console.log(kor.split("").map(e => korean.indexOf(e)).join(""));

// function korToInt(kor, callback) {
//     var result;

//     if (callback) {
//         result = callback(kor);
//         return result;
//     }

//     console.log("안됨")
// }

// 사용
// console.log(korToInt(kor, (kor) => {
//     return kor.split("").map(e => korean.indexOf(e)).join("");
// }));

// 정수를 한글로 변경
let num = "1024";
console.log(num.split("").map(e => korean.charAt(parseInt(e))).join(""));

// function intToKor(num, callback) {
//     var result;

//     if (callback) {
//         result = callback(num);
//         return result;
//     }

//     console.log("안됨")
// }

// 사용
// console.log(intToKor(num, (num) => {
//     return num.split("").map(e => korean.charAt(parseInt(e))).join("");
// }));

// 1~100까지 합 출력
