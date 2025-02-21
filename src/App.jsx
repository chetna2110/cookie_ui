import Nav from "./components/header/Nav"
import Footer from "./components/footer/Footer"
import { Outlet } from "react-router-dom"
import CodeSection from "./components/codeSection/CodeSection"
export default function App() {
  return (
  
     <>
     <Nav/>
     <CodeSection/>
     <Outlet/>
     <Footer/>
     </>
  )
}


