// Language: typescript
// Path: App\src\store\index.tsx
import { createStore } from 'redux';

const initialState = {
    tasks : [
        {
            id: 1,
            description: 'Learn React',
            completed: false
        }
    ]
};

//reducer function
function reducer(state = initialState){
    return state;
}

const store = createStore(reducer);
export default store;