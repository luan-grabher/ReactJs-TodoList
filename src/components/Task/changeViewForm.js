//imports of react, connect and bindActionCreators
import React from "react";

/**
 * With view mode and changeViewMode function, show view modes and change view mode by buttons
 */
const ChangeViewMode = ({viewMode, changeViewMode}) => (
    //row with buttons to change view mode
    <div className="change-view-mode row mt-3 col-6 mx-auto justify-content-center">
        <h4 className="col-12 text-center">
            <i className="fas fa-list-ul px-2"></i>
             Visualizar:
        </h4>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" className={`btn btn-${viewMode === "all" ? "primary active" : "secondary"} btn-sm`}
                onClick={() => changeViewMode("all")}
                title="Todas as Tarefas">
                Todas
            </button>
            <button type="button" className={`btn btn-${viewMode === "done" ? "primary active" : "secondary"} btn-sm`}
                onClick={() => changeViewMode("done")}
                title="Tarefas Concluídas">
                Concluídas
            </button>
            <button type="button" className={`btn btn-${viewMode === "notDone" ? "primary active" : "secondary"} btn-sm`}
                onClick={() => changeViewMode("notDone")}
                title="Tarefas Não Concluídas">
                Não Concluídas
            </button>
            <button type="button" className={`btn btn-${viewMode === "doneAndNotDone" ? "primary active" : "secondary"} btn-sm`}
                onClick={() => changeViewMode("doneAndNotDone")}
                title="Tarefas Concluídas e Não Concluídas">
                Separar Concluidas e Não Concluidas
            </button>
        </div>
    </div>
);


export default ChangeViewMode;