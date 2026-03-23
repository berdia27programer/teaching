import { useState } from "react";
// import Button from "./components/Button";

export default function App() {
  const [count, setCount] = useState(0)

  const add = () => {
    setCount(count + 1) 
  }

  const subtract = () => {
    setCount(count - 1)
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>

      {/* <h1>Hello</h1>
      <Button /> */}
    </>
  )
}