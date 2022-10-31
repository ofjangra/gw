import React from "react";
import { Routes, Route } from 'react-router-dom'
import "./styles/Home.css"
import "./styles/index.css"
import "./styles/login.css"
import Home from "./pages/Home";

const App = () =>{
  return(
    <>
    <Routes>
      <Route path="/" element = {<Home/>}/>
    </Routes>
    </>
  )
}

export default App