//imports of react, connect and bindActionCreators
import React from "react";
import ShowTask from "./showTask";

/**
 * function to for each task to show description of task and button to delete task and button to change status
 */
const ShowTasks = ({tasks, done, changeTaskDescription, changeTaskStatus, deleteTask}) => (
    <div className="tasks col-6 mx-auto mt-3">
        <hr></hr>
        {/* title 'Tarefas Pendentes' if done is true */}
        <h4 className={`${done !== null ? done ? "text-success" : "text-danger" : "text-dark"}`}>
            {done !== null? done ? "Tarefas Concluídas" : "Tarefas Pendentes" : "Todas as Tarefas"}
        </h4>

        {tasks.map(task => {
            let view = <ShowTask key={task.id} task={task} done={done} changeTaskDescription={changeTaskDescription} changeTaskStatus={changeTaskStatus} deleteTask={deleteTask} />

            //if done is not null
            if (done !== null) {
                //if done is true and task is not done, don't show it
                if (done && !task.done) {
                    view = null;
                }
                else if (!done && task.done) {
                    view = null;
                }
            }

            return view;
        })}
    </div>
);


export default ShowTasks;