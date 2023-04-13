import React,{Component} from "react";

class ClassClick extends Component{

    onClickHandler(){
        console.log('button is Clicked')
    }

    render(){
        return(
            <div>
                <button onClick={this.onClickHandler()}>Click Me</button>
            </div>
        )
    }
}

export default ClassClick