import React from 'react';
import { toast } from 'react-toastify';

class AddTodo extends React.Component {

    state = {
        title: ''
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleOnClickTodo = () => {
        if(!this.state.title) {
            toast.error("Bạn phải nhập dữ liệu!")
            return
        }
        let todo = {
            id: Math.floor(Math.random() * 100),
            title: this.state.title
        }
        this.props.addNewTodo(todo)
        this.setState({
            title: ''
        })
    }

    render() {
        let {title} = this.state
        return (
            <div className="add-todo">
                <input 
                    type="text" 
                    value={title} 
                    className="style" 
                    placeholder="Nhập dữ liệu..."
                    onChange={(event)=> this.handleOnChangeTitle(event)}
                />
                <button 
                    className="button style add" type="submit"
                    onClick={()=> this.handleOnClickTodo()}
                    >Add
                </button>
            </div>
        )
    }
}

export default AddTodo;
