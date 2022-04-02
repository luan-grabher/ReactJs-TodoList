//imports of react, connect and bindActionCreators
import React from "react";

/**
 * With function addTask, show a input field and a button to add a new task
 */
const AddTaskForm = ({ addTask }) => (
    //Form with description and button when click on button add task with 'description' to the new task
    <form className="add-task-form mt-5 text-center"
        onSubmit={e => {
        e.preventDefault();
        addTask(e.target.description.value);
        e.target.description.value = "";
        }}
    >
        {/* input description and button */}
        <div className="row col-6 mx-auto justify-content-center">
            {/* input description */}
            <div className="col-6">
                <input type="text" className="form-control" placeholder="Adicionar Tarefa" id="description" />
            </div>
            
            {/* Button Adicionar to call addTask with 'description' */}
            <button type="submit" className="btn btn-success col-1"
                title="Adicionar Tarefa">             
                <i className="fas fa-plus"></i>
            </button>
        </div>
    </form>
);


export default AddTaskForm;