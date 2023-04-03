import React ,{Component} from "react"

class Msg extends Component{
    constructor(props){
        super(props)
        this.state = {
            message:props.message
        }
    }

    changeMessage(){
        this.setState({
            message:"Thank you for Subscribing . . ."
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Msg;