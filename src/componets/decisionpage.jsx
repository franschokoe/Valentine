import { useEffect, useState } from "react";
import React from "react";
import '../style/style.css'
import '../style/style.popup.css'
import NamePopup from "./namepopup.jsx";
import fingerprint from "../assets/first/fingerprint-love.jpg"

export function  Decision(){
    const [name , setName] =  useState('')
    const [open, setOpen] = useState(true)
    const [yes , setYes] = useState()

    // moving button
    const [position, setPosition] = useState({ top: 10, left: 100 });

    const moveButton = () => {
        const x = Math.floor(Math.random() * (window.innerWidth - 100)); // 100 = button width
        const y = Math.floor(Math.random() * (window.innerHeight - 50)); // 50 = button height
        setPosition({ top: y, left: x });
  };



    const submit =()=>{
        if (!name.trim()){
            return
        }
        // console.log(name)
        setOpen(false);
    }
    // my pop up
    if(open){
        return(
            <>
                <div className="overlay">
                    <div className="modal">
                        <h2>Your name</h2>
    
                        <input
                        autoFocus
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        />
    
                        <button onClick={submit}>Continue</button>
                    </div>
                </div>
            </>
        )
    }
    // actial invite
    return (
        <div className="mycontainer">
            {/* <NamePopup /> */}
            <div className="container1 shadow-xl/30" >
                <img className="fingerprint" src={fingerprint}/>
                <div className="sub-info">
                    <h1>{name} Will you be my Valentine ?</h1>

                </div>
                <div className="butn-part">
                    <button className="btn1">Yes ! 🌹</button>
                    <button 
                        className="btn2"
                        onMouseOver={moveButton}
                    >No ! 😓 </button>
                </div>
            </div>

        </div>
    )

}