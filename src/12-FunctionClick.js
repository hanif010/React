import React from "react";

function FunctionClick(){

    function clickH(){
        console.log('Button is Clicked')
    }

    return(
        <div>
            <button onClick={clickH}>Click Me 2</button>
        </div>
    )
}

export default FunctionClick