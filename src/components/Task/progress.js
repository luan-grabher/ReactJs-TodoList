//imports of react, connect and bindActionCreators
import React from "react";

/**
 * With tasks, sum total tasks, done tasks and not done tasks, show this in a progress bar
 */
const Progress = ({tasks}) => (
    <div className="col-6 mt-5 mx-auto justify-content-center">
        <h3>
            Lista de Tarefas:
            <div className="mx-3 btn btn-secondary btn-sm" >{tasks.length}</div>
        </h3>
        <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" style={{width: `${(tasks.filter(task => task.done).length / tasks.length) * 100}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                {tasks.filter(task => task.done).length} de {tasks.length} concluídas
            </div>
        </div>
    </div>
);


export default Progress;