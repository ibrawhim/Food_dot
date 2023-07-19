import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Search from "./pages/Search"
import Index from "./pages/Index"
import List from "./pages/List"




function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/list" element={<List/>}/>
    </Routes>
    </>
  )
}

export default App
