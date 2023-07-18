import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Index from "./pages/Index"
import Offcanvas from "./components/Offcanvas"



function App() {
  

  return (
    <>
    <Navbar/>
    {/* <Offcanvas/> */}
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App
