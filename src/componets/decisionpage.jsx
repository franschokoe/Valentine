import { useEffect, useState } from "react";
import React from "react";
import '../style/style.css'
import fingerprint from "../assets/first/fingerprint-love.jpg"

export function  Decision(){

    const [yes , setYes] = useState()


    // receiverName = window.prompt("Your name: ")

    return (
        <div className="mycontainer">

            <div className="container1 shadow-xl/30" >
                <img className="fingerprint" src={fingerprint}/>
                <div className="sub-info">
                    <h1>Your Name Will you be my Valentine</h1>

                </div>
                <div className="btn-part">
                    <button>Yes ! 🌹</button>
                    <button>No ! 😓 </button>
                </div>
            </div>

        </div>
    )

}