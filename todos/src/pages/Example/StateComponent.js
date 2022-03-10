import React from "react"
class StateComponent extends React.Component {

    state = {
        name: "",
        age: 22,
        change: 'React'
    }
    handleOnChangeName = (event) =>{
        console.log("render: ", this.state)
        this.setState({
            name: event.target.value,
            // change: 'abc'
        })
    }
    handleOnButtonClick = () => {
        console.log("onButtonClick")
        alert("OK")
    }
    /* 
    JSX => return block
    Fragment
    
    */
    render() {
        console.log("render: ", this.state)
        return (
            <React.Fragment>
                <div className="first">
                    {/* {console.log("My name is", name)} */}
                    <input value={this.state.name} type="text"
                        onChange={(event)=> this.handleOnChangeName(event)}
                    />
                    Hello is {this.state.name}
                </div>
                <div className="second">
                    <span>I am: {this.state.age}</span>
                </div>
                <div className="two">
                    <button onClick={()=> this.handleOnButtonClick()}>Click me</button>
                </div>
            </React.Fragment>
        )
    }
}

export default StateComponent