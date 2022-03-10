import React from "react"
import ChildComponent from "./ChildComponent"
import HookFc from "./HookFc"
import AddComponent from "./AddComponent"

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: Math.floor(Math.random() * 10), title: "Developers", saraly: "500$"},
            { id: Math.floor(Math.random() * 10), title: "Tester", saraly: "400$"},
            { id: Math.floor(Math.random() * 10), title: "Project managers", saraly: "1000$"}
        ]
    }

    addNewJob = (job) => {
        console.log("check job from parent: ", job)
        // let currentJob = this.state.arrJobs
        // currentJob.push(job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job],
            // arrJobs: currentJob
        })
    }

    deleteAJob = (job) => {
        let currentJob = this.state.arrJobs
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log(">>> run didUpdate: ", "prev state: ", prevState, "current state: ", this.state)
    }
    
    componentDidMount = () => {
        console.log(">>> run componentDidMount")
    }

    render() {
        console.log(">>> call render: ", this.state)
        return (
            <React.Fragment>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                {/* <ChildComponent 
                    name={this.state.firstName}
                    age={"23"}
                    address={"Ha Nam"}
                    def={this.state.arrJobs}
                /> */}
                <HookFc 
                    def={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />

            </React.Fragment>
        )
    }
}

export default MyComponent