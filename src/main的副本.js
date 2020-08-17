//console.log('webpack')
let tools = require('./a')
import './test.css'
import baidu from './imgs/baidu.png'

//import res from './data.json'


// @testable
// class MyTestableClass {
//   // ...
// }

// function testable(target) {
//   target.isTestable = true;
// }

// console.log(MyTestableClass.isTestable)// true


let result = tools.sum(10, 80)
let result2 = tools.jian(10, 80)
console.log(result)
console.log(baidu)

var oImg = document.createElement('img')
var odiv = document.createElement('div')
odiv.innerHTML="hello webpack11112223334444"
oImg.src=`./${baidu}`

document.getElementById('app').appendChild(oImg)
document.getElementById('app').appendChild(odiv)
