const express = require("express")

const app = express()

// 1.
app.get("/main", (req, res) => {
    res.send("Welcome").statusCode(200)
})

// req - request - მოთხოვნა
// res - response - პასუხი

// 2.
app.post("/cart", (req, res) => {
    res.send("Add to cart").statusCode(201)
})

// 3.
app.delete("/cart/:id", (req, res) => {
    res.send("Deleted id").statusCode(203)
})

// 4.
app.put("/cart/:id", (req, res) => {
    res.send("Change one item").statusCode(201)
})

// 5.
app.patch("/profile", (req, res) => {
    res.send("Change your profile").statusCode(201)
})

app.listen(() => {
    console.log("Server started on port 3000")
}, 3000)