// initial state with lastTaskId and tasks with id, description and done status
const INITIAL_STATE = ()=>{
    //get lastTaskId from localStorage, if not exist, set to 0
    let lastTaskId = localStorage.getItem('lastTaskId') || 0;
    //get tasks from localStorage, if not exist, set to empty array
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    //get viewMode from localStorage, if not exist, set to 'all'
    let viewMode = localStorage.getItem('viewMode') || 'all';
    
    //return object with lastTaskId and tasks
    return {
        viewMode: viewMode,
        lastTaskId : lastTaskId,
        tasks: tasks
    }
};

//task reducer
export default function tasksReducer(state = INITIAL_STATE(), action) {
    console.log(action);

    //switch action type
    switch (action.type) {
        //case add task
        case 'ADD_TASK':
            //increment lastTaskId
            state.lastTaskId++;
            //create new task with id, description and done status
            let newTask = {
                id: state.lastTaskId,
                description: action.payload.description,
                done: false
            };
            //add new task to tasks array
            state.tasks = [...state.tasks, newTask];
            break;
        //case delete task
        case 'DELETE_TASK':
            //find task with id
            let deleteTask = state.tasks.find(task => task.id === action.payload.id);
            //if task exist
            if (deleteTask) {
                //remove task from tasks array
                state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
            }
            break;
        //case change task description
        case 'CHANGE_TASK_DESCRIPTION':
            console.log("CHANGE_TASK_DESCRIPTION");
            //find task with id
            let taskToChangeDescription = state.tasks.find(task => task.id === action.payload.id);
            //if task exist
            if (taskToChangeDescription) {
                //set task description
                taskToChangeDescription.description = action.payload.description;
                state.tasks = [...state.tasks];
            }
            break;
        //case check task
        case 'CHANGE_TASK_STATUS':
            console.log("changeTaskStatus");
            //find task in state.tasks with id
            let taskDone = state.tasks.find(task => task.id === action.payload.id);
            //if task exist, change task done status
            if (taskDone) {
                taskDone.done = !taskDone.done;
                state.tasks = [...state.tasks];
            }
            break;
        //case change view mode
        case 'CHANGE_VIEW_MODE':
            state.viewMode = action.payload.viewMode;
            break;
        //default
        default:
            console.log("default");
            break;
    }

    //save on localStorage
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
    //save lastTaskId to localStorage
    localStorage.setItem('lastTaskId', state.lastTaskId);
    //save viewMode to localStorage
    localStorage.setItem('viewMode', state.viewMode);

    //return lastTaskId and tasks
    return {
        ...state,
        viewMode: state.viewMode,
        lastTaskId: state.lastTaskId,
        tasks: state.tasks
    };
}