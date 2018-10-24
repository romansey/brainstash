export function createTask(title, startImmediately) {
    return {
        type: 'CREATE_TASK',
        payload: {
            title,
            startImmediately
        }
    };
}

export function deleteTask(task) {
    return {
        type: 'DELETE_TASK',
        payload: task
    };
}

export function deleteAllTasks() {
    return {
        type: 'DELETE_ALL_TASKS'
    };
}

export function startTask(task) {
    return {
        type: 'START_TASK',
        payload: task
    };
}

export function stopTask(task) {
    return {
        type: 'STOP_TASK',
        payload: task
    };
}

export function stopActiveTask() {
    return {
        type: 'STOP_ACTIVE_TASK'
    };
}

export function resetTimer(task) {
    return {
        type: 'RESET_TIMER',
        payload: task
    };
}

export function resetAllTimers() {
    return {
        type: 'RESET_ALL_TIMERS'
    };
}

export function selectTask(task) {
    return {
        type: 'SELECT_TASK',
        payload: task
    };
}

export function renameTask(task, title) {
    return {
        type: 'RENAME_TASK',
        payload: {
            task,
            title
        }
    };
}

export function changeTaskNotes(task, notes) {
    return {
        type: 'CHANGE_TASK_NOTES',
        payload: {
            task,
            notes
        }
    }
}

export function setTimer(task, timeString) {
    return {
        type: 'SET_TASK_TIMER',
        payload: {
            task,
            timeString
        }
    }
}

export function moveTask(task, position) {
    return {
        type: 'MOVE_TASK',
        payload: {
            task,
            position
        }
    }
}
