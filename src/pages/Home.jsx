import React, { useEffect, useState } from "react";
import Login from "../components/Login";
import {MenuOutlined} from '@mui/icons-material'


const Home = () =>{
    useEffect(() =>{
        getOs()
    },[])
const getOs = () =>{
    let userAgent = window.navigator.userAgent
    let platForm = window.navigator.platform

    const iosPlatforms = ["iPhone", "iPad", "iPod"]

    if (iosPlatforms.includes(platForm) || /Android/.test(userAgent)){
        setIsMobile(true)
    }
}
const [loginOpen, setLoginOpen] = useState(false)
const [navActive, setNavActive] = useState(false)
const [isMobile, setIsMobile] = useState(false)

return(
    <>
        <nav className="navContainer">
                <nav className="upperNav">
                    <ul className={navActive ? "links mobile-nav" : "links"}>
                        <li>Vehicle RC Detail</li>
                        <li>Traffic E Challan</li>
                        <li>blacklist Vehicle</li>
                        <li>PUC</li>
                        <li>Vehicle Fitness</li>
                        <li>Vehicle National Permit</li>
                        <li>Forms</li>
                        <li>RTO Circular</li>
                    </ul>
                    <MenuOutlined onClick = {()=>setNavActive(!navActive)} id = "menuOpen"/>
                </nav>
                <nav className="cover">
                        <strong onClick={() => setLoginOpen(true)}>Login</strong>
                </nav>
        </nav>
        <Login isOpen={loginOpen} onClose = {() => setLoginOpen(false)}/>
        <section className = "sheetView" style = {isMobile ? {marginTop:"124px"} : {margin:"0"}}>
                <iframe src="https://docs.google.com/spreadsheets/d/1BhJJE8zbLbtTOQHu6gEG1UsHzMNKa5BIVnMVTPOqy1A/edit#gid=1500776947" name="myFrame"></iframe>
        </section>
    </>
)
}

export default Home