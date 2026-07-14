const express = require("express")

const app = express()

// 1.
app.get()

// 2.
app.post()

// 3.
app.delete()

// 4.
app.put()

// 5.
app.patch()

app.listen(() => {
    console.log("Server started on port 3000")
}, 3000)