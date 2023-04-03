import React from "react";
import { useState } from "react";

function Msg2({messgae}){

    let [a, setCount] = useState(messgae);
    let handleClick = function(){
        setCount("Thanks for subscribing!!!")
    }

    return (
        <div>
            <h1>{a}</h1>
            <button onClick={handleClick}>Subscribe</button>
        </div>
    )
}

export default Msg2;