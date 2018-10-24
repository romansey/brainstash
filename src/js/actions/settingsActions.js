export function updateGeneralNotes(notes) {
    return {
        type: 'UPDATE_GENERAL_NOTES',
        payload: notes
    };
}

export function setStartNewTasksImmediately(startNewTasksImmediately) {
    return {
        type: 'SET_START_NEW_TASKS_IMMEDIATELY',
        payload: startNewTasksImmediately
    };
}
