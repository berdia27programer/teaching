import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/NavBar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/signup" element={SignUp} />
        <Route path="/login" element={Login} />
      </Routes>
    </div>
  )
}