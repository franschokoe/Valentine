import { useEffect, useState } from "react";
import React from "react";
import '../style/style.css'
import '../style/style.popup.css'
import NamePopup from "./namepopup.jsx";
import fingerprint from "../assets/first/fingerprint-love.jpg"
import WhatsAppButton from "./Whatsapp.jsx";

export function  Decision(){
    const [name , setName] =  useState('')
    const [name2 , setName2] = useState("")
    const [open, setOpen] = useState(true)
    const [yes , setYes] = useState()
    const [phoneNumber, setPhoneNumber] = useState('');

    // moving button
    const [position, setPosition] = useState({ top: 100, left: 100 });

    const moveButton = () => {
        const x = Math.floor(Math.random() * (window.innerWidth - 100)); // 100 = button width
        const y = Math.floor(Math.random() * (window.innerHeight - 50)); // 50 = button height
        setPosition({ top: y, left: x });
    };

    // for when yes is clicked
    const yesClicked = ()=>{
        console.log(`${name2} i will`)
        // if(yes){
        //     console.log(`${name} i will be your valentine`)
        // }
    }

    if (yes){

        // My other pop up after yes
        return(
            <div>
                <div>
                    <iframe 
                    src="https://giphy.com/embed/26xBBjZ35Q6CMtuI8" 
                    width="480" 
                    height="480" 
                    style="" 
                    frameBorder="0" 
                    class="giphy-embed" 
                    allowFullScreen/>
                </div>
                <div>
                    <h1>I will be your valentine 🤭🎉</h1>

                    <WhatsAppButton phoneNumber={phoneNumber} isActive={phoneNumber !== ''} />
                    <h3>Please SEND {name2} a screenshot that you said "YES" ,so {name2} can prepare</h3>
                </div>

                {/* <h2>Please him/her a screenshot that you said "YES"so he/she can prepare</h2> */}
            </div>
        )
    }
    

    const submit =()=>{
        if (!name.trim() & !name2.trim()){
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

                        <h2>Link from</h2>
                        <input
                        autoFocus
                        value={name2}
                        onChange={(e) => setName2(e.target.value)}
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
                    <button className="btn1"
                    onClick={()=>yesClicked()}
                    >Yes ! 🌹</button>
                    <button 
                        className="btn2"
                        onMouseOver={moveButton}
                        onTouchStart={moveButton}
                        style={{
                            position: "absolute",
                            top: position.top,
                            left: position.left,
                            padding: "10px 20px",
                            cursor: "pointer",
                            transition: "all 0.3s ease" // smooth movement
                        }}
                    >No ! 😓 </button>
                </div>
            </div>

        </div>
    )

}