import React from "react";

let Hello2 = function(){
    // return (
    //     <div class =Name="One">
    //         <h1>Hello Two</h1>
    //     </div>
    // )

    // Behind the scene

    return React.createElement('div',{className:'One'},React.createElement('h1',null, "Hello Two 2"))
}

export default Hello2;