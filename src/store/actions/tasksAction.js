//action add task with 'description' to the new task
export const addTask = (description) => {
    console.log("addTask");
    return {
        type: 'ADD_TASK',
        payload: {
            description
        }
    }
}

//action delete task with 'id'
export const deleteTask = (id) => {
    return {
        type: 'DELETE_TASK',
        payload: {
            id
        }
    }
}

//action Set task done with 'id'
export const changeTaskStatus = (id) => {
    return {
        type: 'CHANGE_TASK_STATUS',
        payload: {
            id
        }
    }
}

//action change task description with 'id' and 'description'
export const changeTaskDescription = (id, description) => {
    return {
        type: 'CHANGE_TASK_DESCRIPTION',
        payload: {
            id,
            description
        }
    }
}

//action change view mode with 'viewMode'
export const changeViewMode = (viewMode) => {
    return {
        type: 'CHANGE_VIEW_MODE',
        payload: {
            viewMode
        }
    }
}