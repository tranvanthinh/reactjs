import React from "react"
import "./ListTodo.scss"
import AddTodo from './AddTodo'
import { toast } from 'react-toastify';

class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'Todo1', title: 'Doing homework'},
            { id: 'Todo2', title: 'Making videos'},
            { id: 'Todo3', title: 'Learning React'}
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        
        toast.success("Thêm thành công!")
    }
    handleOnClickDeleteTodo = (todo) => {
        let current = this.state.listTodos
        current = current.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: current
        })
        toast.success("Xóa thành công!")

    }
    handleOnClickEditTodo = (todo) => {
        this.setState({
            editTodo: todo
        })
    }

    render() {
        let { listTodos, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0
        console.log(">>> check empty: ", isEmptyObj)
        return (
            <>
                <p>
                    Hello Todos
                </p>
                <div className="list-todo-container">
                    <AddTodo 
                        addNewTodo={this.addNewTodo}
                    />
                    <div className="list-todo-content">
                        {listTodos && listTodos.length > 0 && 
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        <span className="content"> {index + 1} - {item.title}</span>
                                        {/* <input type="text" value={item.title}/> */}
                                        <button 
                                            className="btn btn-edit"
                                            onClick={()=> this.handleOnClickEditTodo(item)}
                                        >Edit
                                        </button>
                                        <button 
                                            className="btn btn-delete"
                                            onClick={()=> window.confirm("Are you sure you want to delete this item?") ? this.handleOnClickDeleteTodo(item) : ""}
                                        >Delete
                                        </button>
                                    </div>
                                )
                            })
                        } 
                    </div>
                </div>
            </>
        )
    }
}

export default ListTodo