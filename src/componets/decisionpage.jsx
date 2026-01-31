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

    const submit =()=>{
        if (!name.trim()){
            return
        }
        // console.log(name)
        setOpen(false);
    }

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
                    <button className="btn2">No ! 😓 </button>
                </div>
            </div>

        </div>
    )

}