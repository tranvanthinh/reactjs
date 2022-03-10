import React from "react";

class AddComponent extends React.Component {

    state = {
        title: '',
        saraly: '',
    }
    handleOnChangeTitleJobs = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleOnChangeSaraly = (event) => {
        this.setState({
            saraly: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        if(!this.state.title || !this.state.saraly) {
            alert("Vui lòng nhập thông tin")
            return false
        }
        console.log(">>> check data input: ", this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 10),
            title: this.state.title,
            saraly: this.state.saraly
        })
        this.setState({
            title: '',
            saraly: ''
        })
    }
    render() {
        return (
            <form>
                <label htmlFor="fname">Job's title:</label><br />
                <input 
                    type="text" 
                    value={this.state.title} 
                    placeholder="Job's title"
                    onChange={(event)=> this.handleOnChangeTitleJobs(event)}
                />
                <br/>
                <label htmlFor="lname">Saraly:</label><br />
                <input 
                    type="text" 
                    value={this.state.saraly} 
                    placeholder="Saraly"
                    onChange={(event)=> this.handleOnChangeSaraly(event)}
                />
                <br/><br/>
                <input 
                    type="submit"
                    value="Submit" 
                    onClick={(event)=> this.handleSubmit(event)}
                />
            </form> 
        )
    }
}

export default AddComponent