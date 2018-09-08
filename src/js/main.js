import calculator, { name as imya, yo } from './calculator'
import './conso'
const a = 5
const b = 6

var sum = calculator.sum(a, b)
console.log(`calculator来自模块化开发功能import calculator from './calculator',该sum的结果(${sum})就是import语法引入的calculator文件中的sum功能`)
console.log(`imya的值${imya}来自模块化开发功能import {name as imya} form './calculator', `)
console.log(`yo的值${yo}来自模块化开发功能import {yo} form './calculator', `)

