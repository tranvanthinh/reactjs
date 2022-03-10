import React from "react"

class ChildComponent extends React.Component {

    state = {
        firstName: '',
        lastName: ''
    }
    
    handleOnChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleOnChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleOnClick = (event) => {
        event.preventDefault()
        console.log("check data input: ", this.state)
    }
    render() {
        console.log(">>> check props: ", this.props)
        // let name = this.props.name
        // let age = this.props.age
        let { name, age, address, def } = this.props

        return (
            <React.Fragment>
                {/* <div>Child Component name: {name} - {age} - {address}</div> */}

                <div className="job-lists">
                    {
                        def.map((item, index) => {
                            return (
                                <div key={item.id}>
                                   {item.title} - {item.saraly}
                                </div>     
                            )
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default ChildComponent