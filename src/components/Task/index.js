//imports of react, connect and bindActionCreators
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//import components
import AddTaskForm from "./addTaskForm";
import ShowTasks from "./showTasks";
import ChangeViewMode from "./changeViewForm";
import Progress from "./progress";

//import task actions
import * as tasksAction from "../../store/actions/tasksAction";

/**
 * main component of task to show progress, form to add task and list of tasks
 */
const Task = ({ tasks, viewMode, changeViewMode, addTask, changeTaskStatus, changeTaskDescription, deleteTask }) => (
    <>
        <Progress tasks={tasks} />
        <AddTaskForm addTask={addTask} />
        <ChangeViewMode viewMode={viewMode} changeViewMode={changeViewMode} />
        {/* if viewMode is 'all' show all tasks */}
        {viewMode === "all" && <ShowTasks tasks={tasks} done={null} changeTaskStatus={changeTaskStatus} changeTaskDescription={changeTaskDescription} deleteTask={deleteTask} />}
        {/* if viewMode is 'done' show only done tasks */}
        {viewMode === "done" && <ShowTasks tasks={tasks} done={true} changeTaskStatus={changeTaskStatus} changeTaskDescription={changeTaskDescription} deleteTask={deleteTask} />}
        {/* if viewMode is 'notDone' show only not done tasks */}
        {viewMode === "notDone" && <ShowTasks tasks={tasks} done={false} changeTaskStatus={changeTaskStatus} changeTaskDescription={changeTaskDescription} deleteTask={deleteTask} />}
        {/* if viewMode is 'doneAndNotDone' show before done and after not done tasks */}
        {viewMode === "doneAndNotDone" && <ShowTasks tasks={tasks} done={false} changeTaskStatus={changeTaskStatus} changeTaskDescription={changeTaskDescription} deleteTask={deleteTask} />}
        {viewMode === "doneAndNotDone" && <ShowTasks tasks={tasks} done={true} changeTaskStatus={changeTaskStatus} changeTaskDescription={changeTaskDescription} deleteTask={deleteTask} />}
        {/* Spacing if page is full and not pull over on botton bar */}
        <div className="mt-5"></div>
    </>
);

//map state to props
const mapStateToProps = state => ({
    tasks: state.tasks.tasks,
    lastTaskId: state.tasks.lastTaskId,
    viewMode: state.tasks.viewMode
});

//map dispatch to props
const mapDispatchToProps = dispatch => bindActionCreators(tasksAction, dispatch);

//connect Task to store
export default connect(mapStateToProps, mapDispatchToProps)(Task);


