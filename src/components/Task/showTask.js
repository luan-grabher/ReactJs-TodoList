//imports of react, connect and bindActionCreators
import React from "react";

/**
 * function to show description of task
 */
const inputDescription = (task, changeTaskDescription) => {
    return <input type="text" 
    value={task.description}
    className = {`form-control border-0 border-bottom`}
    onChange={() => changeTaskDescription(task.id, document.getElementById(`description-${task.id}`).value)} id={`description-${task.id}`} />
};


/**
 * function to show status of task and this description, button to change status and button to delete task
 */
const ShowTask = ({task, changeTaskDescription, changeTaskStatus, deleteTask}) => (
    <div key={task.id} className="task mt-3 row align-items-center justify-content-center">
        <div className="task__done col-1 text-center pr-0">
            <input type="checkbox" checked={task.done} onChange={() => changeTaskStatus(task.id)} />
        </div>
        <div className="task__description col-10 pl-0">
            {task.done? <s>{inputDescription(task,changeTaskDescription)}</s> : inputDescription(task,changeTaskDescription)}
        </div>
        <div className="task__delete col-1">
            <button title="Deletar Tarefa"
                className="btn btn-danger"
                onClick={() => deleteTask(task.id)}>
                <i className="fas fa-trash-alt"></i>
            </button>
        </div>
    </div>
);


export default ShowTask;