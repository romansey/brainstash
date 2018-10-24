const defaultState = {
    generalNotes: '',
    startTaskImmediately: false
};

export default function settingsReducer(state = defaultState, action) {
    switch (action.type) {
        case 'UPDATE_GENERAL_NOTES':
            return Object.assign({}, state, {generalNotes: action.payload});
        case 'SET_START_NEW_TASKS_IMMEDIATELY':
            return Object.assign({}, state, {startNewTasksImmediately: action.payload});
    }
    return state;
}
