import { useState } from "react";
import React from "react";
import '../style/style.css'
import fingerprint from "../assets/first/fingerprint-love.jpg"

export function  Decision({name}){

    const [yes , setYes] = useState()

    return (
        <div className="mycontainer">

            <div className="container1 shadow-xl" >
                <img className="fingerprint" src={fingerprint}/>
                <div>
                    <h1>Your Name will you be my Valentine</h1>
                </div>
            </div>
        </div>
    )

}