import React from "react"

class HookFc extends React.Component {
    state = {
        showJob: false
    }
    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }

    handleOnClickDelete = (job) => {
        console.log(">>> handleOnClickDelete", job)
        this.props.deleteAJob(job)
    }

    render() {
        let {showJob} = this.state
        let { def } = this.props
        let check = showJob === true ? '' : []

        return (
            <React.Fragment>
                {check ?
                    <div>
                        <button onClick={()=> this.handleShowHide()}>Show</button>
                    </div>
                :
                    <div>
                        <div className="job-lists">
                    {
                        def.map((item, index) => {
                            return (
                                <div key={item.id}>
                                   {item.title} - {item.saraly} &nbsp; 
                                        <button 
                                            style={{cursor: 'pointer'}}
                                            onClick={()=> this.handleOnClickDelete(item)}
                                            >x
                                        </button>
                                </div>     
                            )
                        })
                    }
                        </div>

                        <div>
                            <button onClick={()=> this.handleShowHide()}>Hide</button>
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}

// function HookFc(props) {
 
//     let { def } = props
//     return (
//         <React.Fragment>

//             <div className="job-lists">
//                 {
//                     def.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.saraly}
//                             </div>     
//                         )
//                     })
//                 }
//             </div>
//         </React.Fragment>
//     )
// }

export default HookFc