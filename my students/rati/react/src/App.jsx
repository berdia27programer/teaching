import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"

export default function App() {
  const { name, password } = useContext(AuthContext)

  return (
    <div>
      <h1>Sign up</h1>
      <form>
          <input name="name" type="text" placeholder="enter your name" />
          <br />
          <input name="password" type="password" placeholder="Create a password" />
          <button>submit</button>
      </form>
      <p>name: {name}</p>
      <p>password: {password}</p>
    </div>
  )
}