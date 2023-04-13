import React, { Component } from "react";

class Count extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    increment() {
        // this.state.count = this.state.count +1
        // console.log(this.state.count)

        // this.setState({
        //     count: this.state.count + 1
        // })

        this.setState(prevsate => ({count: prevsate.count + 1}))
    }

    increment5(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=> this.increment5()}>IncrementCount</button>
            </div>
        )
    }
}

export default Count