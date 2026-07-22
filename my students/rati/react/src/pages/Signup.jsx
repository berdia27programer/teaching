import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"

export default function SignUp() {
  const { name, password } = useContext(AuthContext)

  return (
    <div>
      <h1 class=" text-4xl">Sign up</h1>
      <form>
          <input name="name" class=" bg-red-600 text-white" type="text" placeholder="enter your name" />
          <br />
          <input name="password" class=" bg-blue-600 text-white" type="password" placeholder="Create a password" />
          <button>submit</button>
      </form>
      <p>name: {name}</p>
      <p>password: {password}</p>
    </div>
  )
}