// CAU 1
// j = []
// for(let i = 50; i<=100; i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }
// CAU 2
// let a = parseInt(prompt("input a number"))
// let b = parseInt(prompt("input a number")) 
// let i = 1
// while (i<=a && i<=b) {
//     if (a%i == 0 && b%i==0){
//         var gcd = i
//     i = i + 1
//     }

// }
// console.log(`the greatest common divisor is ${i}`)
// Cau 3
// let a = parseInt(prompt("input a number"))
// let isPrime = true;
// if (a == 1) {
//     console.log(`${a} is neither a prime number nor a compositive number`)
// }
// else if (a > 1) {
//     for (let i = 2; i < Math.sqrt(a); i++) {
//         if (a % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(`${a} is a prime number`)
//     }
//     else {
//         console.log(`${a} is not a prime number`)
//     }
// }
// else {
//     console.log(`${a} is not a prime number`)
// }
// CAU 4
// solve a quadratic equation
// let a = parseInt(prompt("input a number"))
// let b = parseInt(prompt("input a number"))
// let c = parseInt(prompt("input a number"))
// var delta = b^2 - 4*a*c
// if (delta > 0){
//     let sol1 = (-b) - Math.sqrt(delta) / 4*a
//     let sol2 = (-b) + Math.sqrt(delta) / 4*a
//     console.log(`Equation ${a}x^2+${b}x+${c} = 0 has ${sol1} and ${sol2} as solutions`)
// }
// else if(delta = 0){
//     let sol = (-b) / 2*a
//     console.log(`Equation ${a}x^2+${b}x+${c} = 0 has ${sol} as a solution`)
// }
// else{
//     console.log(`Equation ${a}x^2+${b}x+${c} = 0 has no solution`)
// }

// CAU 5
// let a = parseInt(prompt("input a number"))
// var quotient500 = Math.floor(a/500);
// var remainder500 = a % 500;
// var quotient200 = Math.floor(remainder500/200);
// var remainder200 = remainder500 % 200;
// var quotient100 = Math.floor(remainder200/100);
// var remainder100 = remainder200 % 100;
// var quotient50 = Math.floor(remainder100/50);
// var remainder50 = remainder100 % 50;
// var quotient20 = Math.floor(remainder50/20);
// var remainder20 = remainder50 % 20;
// var quotient10 = Math.floor(remainder20/10);
// var remainder10 = remainder20 % 10;
// var quotient5 = Math.floor(remainder10/5);
// var remainder5 = remainder10 % 5;
// var quotient2 = Math.floor(remainder5/2);
// var remainder2 = remainder5 % 2;
// var quotient1 = Math.floor(remainder2/2)

// console.log(`${a}k = ${quotient500} x 500k + ${quotient200} x 200k + ${quotient100} x 100k + ${quotient50} x 50k + ${quotient20} x 20k + ${quotient10} x 10k + ${quotient5} x 5k + ${quotient2} x 2k +${quotient1} 1k `)


let n = parseInt(prompt("input a number"))

let tien = [500,200,100,50,20,10,5,2,1]

for (let i of tien){
    let to = Math.floor(n/i)
    if(to > 0){
        console.log(`${to} tờ ${i}`)
    }
    n = n % i
}
let data = [
    {
        menhGia : 500,
        img: 'https://lh3.googleusercontent.com/CAr7pcNvPtrjlJa6Jfu2R_A0-S-9e3-h9Izyc4kCIzqH86_Q0zXWQnl_84zvWoPMqVDD_U8Vt4f7Wjt6Scft3nwJScR7LIegK84rBseLEy4jEOS29uT64i6r0cY_7034rj1-04ow'
    },
    {
        menhGia : 200,
        img: 'https://baoxaydung.com.vn/stores/news_dataimages/vananh/072016/06/10/100838baoxaydung_image003.jpg'
    },
    {
        menhGia : 100,
        img: 'https://upload.wikimedia.org/wikipedia/vi/a/a9/100nghins.jpg'
    },
    {
        menhGia : 50,
        img: 'https://gonatour.vn/vnt_upload/news/05_2020/tien_50000_dong_viet_nam.jpg'
    },
    {
        menhGia : 20,
        img: 'https://gonatour.vn/vnt_upload/news/05_2020/tien_20000_dong_viet_nam.jpg'
    },
    {
        menhGia : 10,
        img: 'https://image.bizlive.vn/uploaded/hoangly_tt/2015_02_24/20130827-tien09_aqgp.jpg'
    },
]