// class Person {
//     constructor(name, age) {
//         let.name = name
//         let.age = age
//     }
// }

// const numbersSet = new Set([1, 2, 3])

// numbersSet.add(4)

// numbersSet.delete(3)

// numbersSet.clear()

// console.log(numbersSet.has(2))

import React from "react"
import createRoot from "react-dom/client"

const container = document.getElementById("app")
const root = createRoot(container)

const test = (
    <div>
        <h1>Hello world from js</h1>
        <p>lorem ipsum</p>
    </div>
)

root.render(test)

// render - რაღაცა ელემენტის გამოტანა