import React, { useState } from "react";
import Login from "../components/Login";


const Home = () =>{
    const [loginOpen, setLoginOpen] = useState(false)
    
    return(
        <>
            <nav className="upperNav">
                <ul>
                    <li>Vehicle RC Detail</li>
                    <li>Traffic E Challan</li>
                    <li>blacklist Vehicle</li>
                    <li>PUC</li>
                    <li>Vehicle Fitness</li>
                    <li>Vehicle National Permit</li>
                    <li>Forms</li>
                    <li>RTO Circular</li>
                </ul>
            </nav>
            <nav className="cover">
                    <strong onClick={() => setLoginOpen(true)}>Login</strong>
            </nav>
            <Login isOpen={loginOpen} onClose = {() => setLoginOpen(false)}/>
            <section className = "sheetView">
            <iframe src="https://docs.google.com/spreadsheets/d/1BhJJE8zbLbtTOQHu6gEG1UsHzMNKa5BIVnMVTPOqy1A/edit#gid=1500776947" name="myFrame"></iframe>
            </section>
        </>
    )
}

export default Home