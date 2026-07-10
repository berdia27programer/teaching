// const name = "berdia"
// let age = 13

// console.log(name)
// console.log(age)

// Arrow func

// const greet = () => {
//     console.log("Hello world")
// }

// // Func

// function greet2() {
//     console.log("Hello world")
// }

// setTimeout(() => {
//     console.log("Hello world")
// }, 5000)

// setInterval(() => {
//     console.log("Goodbye")
// }, 5000)

// if (5 > 3) {
//     console.log(true)
// } else if (5 == 3) {
//     console.log("what")
// } else {
//     console.log(false)
// }

// const btn = document.getElementById("btn")

// const data = []

// const signup = e => {
//     e.preventDefault()

//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     if (username === "" || password === "") {
//         alert("Enter all inputs")
//     }

//     data.push({
//         Username: username,
//         Password: password
//     })

//     localStorage.setItem(database, data) // const database = data
// }

// btn.onclick = signup

// addEventListener("click", (e) => {
//     console.log(e);
// })

// const numbers = [1, 2, 3, 4, 5]

// numbers.map(i, () => {
//     console.log(`This number is ${i}`)
//     // This is number 1
//     // This is number 2
//     // ...
// })

// numbers.forEach(i, () => {
//     if (i % 2 === 0) {
//         console.log("even")
//     } else {
//         console.log("odd")
//     }
// })

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const person = new Person("berdia", 13)

console.log(person)