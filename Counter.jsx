import { Component } from "react";

class Counter extends Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    incr(){
        // this.state.count = this.state.count +1

        this.setState(
            {
                count: this.state.count +1
            }, () => {
                console.log("Callback", this.state.count)
            }
        )
        console.log(this.state.count)
    }
    dncr(){
        // this.state.count = this.state.count +1

        this.setState(
            {
                count: this.state.count - 1
            }, () => {
                console.log("Callback", this.state.count)
            }
        )
        console.log(this.state.count)
    }
    render(){
        return(
            <div>
                <button onClick={() => this.incr()}>Increment</button>
                 <button onClick={() => this.dncr()}>Decrement</button>
                <h1>
                    Count - {this.state.count}
                </h1>
            </div>
        )
    }
}

export default Counter