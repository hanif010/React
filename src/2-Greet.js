import React from "react";

function Greet({firstName,lastName,childern}){

    return (
        <div>
            <h1>Hello {firstName}{lastName}</h1>
            {childern}
        </div>
    )
}
export default Greet;