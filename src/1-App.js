// import { useState } from "react";
import Greet from "./2-Greet";
import Welcome from "./3-Welcome";
import Hello from "./4-Hello";
import Hello2 from "./5-Hello";
import Welcome2 from "./6-Welcome2"
import Props from "./7-Props";
import Msg from "./8-Msg";
import Msg2 from "./9-Msg2";
import Count from "./10-Count";
import ClassClick from "./11-ClassClick";
import FunctionClick from "./12-FunctionClick";



function App() {
    return (
        <div>
            <Greet firstName="Hanif" />
            <Greet firstName="Wasim" />
            <Greet firstName="Salman" />

            <Welcome />
            <Hello />
            <Hello2 />

            <Welcome2 />

            <Props name="Ram" lastname="Natikar" />
            <Props name="Omkar" lastname="Pardeshi" />

            <Msg message="Wel-Come" />

            <Msg2 messgae= "Bye"/>

            <Count/>
            <ClassClick/>
            <FunctionClick/>
        </div>
    )
}

export default App;