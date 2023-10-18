import React from "react"
import "./index.css"

function TodoItem(props){
    const {itemDetails,editButton,deleteTodo,completedTask}=props
    const {id,title,completed}=itemDetails

    const editButtonItem=()=>{
        editButton(id)
    }

    const deleteTodoItem=()=>{
        deleteTodo(id)
    }

    const clickTask=()=>{
        completedTask(id)
    }
    
    return(
        <div>
            <div key={id} className="items-container">
                <input type="checkbox" 
                className="check-box"
                onClick={clickTask} 
                onChange={()=>{}} 
                checked={completed}/>
                <h4 className={completed?"mark-as-read":"items-heading"}>{title}</h4>
                <p>{completed?"Completed":"Not Completed"}</p>
                <div className="buttons-container">
                    <button type="button" className="edit-button" onClick={editButtonItem}>Edit</button>
                    <button type="button" className="delete-button" onClick={deleteTodoItem}>Delete</button>
                </div>
            </div>
        </div>
    )
}
export default TodoItem