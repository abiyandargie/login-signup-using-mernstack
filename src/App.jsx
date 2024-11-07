import React,{useState} from "react"
 import "bootstrap/dist/css/bootstrap.min.css"
 import {Route,Routes} from 'react-router-dom'
import Signup from './signup'
import Login from './login'
import Home from './home'

function App() {
  // const [count, setCount] = useState(0)

  return (
   
     <Routes>
      <Route path="/register" element= {<Signup />}></Route>
      <Route path="/login" element= {<Login />}></Route>
      <Route path="/" element= {<Home />}></Route>
     </Routes>
     
    
  )
}

export default App
