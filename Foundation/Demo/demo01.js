
console.log("hej")
console.log('hej')
console.Log("hej") // error

// Set and write a variable

let name = "Lisa"
console.log("Hej " + name)

// Sum two numbers. One a string. parseInt

let x = 2
let y = "3"
console.log(x + y)   // "23"
console.log(x - y)   // -1

let x = 2
let y = parseInt("3")
console.log(x + y)    // 5

// Backtick ("snefnutt")

let name = "Kalle"

let s = "Ditt " + name + " namn är " + name
let s = `Ditt ${name} namn är ${name}`

// "{0} {1}", name, age

// typeof 

let a = 1
let b = "2"
let c = true
let d = function () { alert('hej!') }
let e = [4, 5, 6, true, "777"]
let f = { firstName: "Lisa", age: 66 }

a = "KALLE"

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)


