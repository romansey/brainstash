const defaultState = {
    nextTaskId: 0,
    tasks: []
};

export default function taskReducer(state = defaultState, action) {
    switch (action.type) {
        case 'CREATE_TASK':
            let tasks;
            if (action.payload.startImmediately) {
                tasks = state.tasks.map((task) => {
                    if (task.active) {
                        return createStoppedTask(task);
                    } else {
                        return task;
                    }
                });
            } else {
                tasks = state.tasks;
            }
            return Object.assign({}, state, {tasks: tasks.concat({
                id: state.nextTaskId,
                title: action.payload.title,
                notes: '',
                selected: state.tasks.length === 0,
                secondsActive: 0,
                active: action.payload.startImmediately,
                activeSince: action.payload.startImmediately ? Date.now() : null
            }), nextTaskId: state.nextTaskId + 1});
        case 'DELETE_TASK':
            return Object.assign({}, state, {tasks: state.tasks.filter((task) => {
                return task !== action.payload;
            })});
         case 'DELETE_ALL_TASKS':
            return Object.assign({}, state, {tasks: []});
        case 'SELECT_TASK':
            return Object.assign({}, state, {tasks: state.tasks.map((task) => {
                if ((task.selected && task !== action.payload) || (!task.selected && task === action.payload)) {
                    return Object.assign({}, task, {selected: task === action.payload})
                } else {
                    return task;
                }
            })});
        case 'START_TASK':
            return Object.assign({}, state, {tasks: state.tasks.map((task) => {
                if (task.active && task !== action.payload) {
                    return createStoppedTask(task);
                } else if (!task.active && task === action.payload) {
                    return createStartedTask(task);
                } else {
                    return task;
                }
            })});
        case 'STOP_TASK':
            return Object.assign({}, state, {tasks: state.tasks.map((task) => {
                if (task.active && task === action.payload) {
                    return createStoppedTask(task);
                } else {
                    return task;
                }
            })});
        case 'STOP_ACTIVE_TASK':
            return Object.assign({}, state, {tasks: state.tasks.map((task) => {
                if (task.active) {
                    return createStoppedTask(task);
                } else {
                    return task;
                }
            })});    
        case 'RESET_TIMER':
            return Object.assign({}, state, {tasks: state.tasks.map((task) => {
                if (task === action.payload) {
                    return createResettedTask(task);
                } else {
                    return task;
                }
            })});
        case 'RESET_ALL_TIMERS':
            return Object.assign({}, state, {tasks: state.tasks.map((task) => {
                return createResettedTask(task);
            })});
        case 'RENAME_TASK':
            return Object.assign({}, state, {tasks: state.tasks.map((task) => {
                if (task === action.payload.task) {
                    return Object.assign({}, task, {title: action.payload.title});
                } else {
                    return task;
                }
            })});
        case 'CHANGE_TASK_NOTES':
            return Object.assign({}, state, {tasks: state.tasks.map((task) => {
                if (task === action.payload.task) {
                    return Object.assign({}, task, {notes: action.payload.notes});
                } else {
                    return task;
                }
            })});
        case 'SET_TASK_TIMER':
            return Object.assign({}, state, {tasks: state.tasks.map((task) => {
                if (task === action.payload.task) {
                    return createTaskTimerOverriden(action.payload.task, action.payload.timeString);
                } else {
                    return task;
                }
            })});
        case 'MOVE_TASK':
            const reorderedTasks = state.tasks.filter(task => task !== action.payload.task);
            reorderedTasks.splice(action.payload.position, 0, action.payload.task);
            return Object.assign({}, state, {tasks: reorderedTasks});
    }
    return state;
}

function createStoppedTask(task) {
    return Object.assign({}, task, {
        active: false,
        secondsActive: task.secondsActive + Math.floor((Date.now() - task.activeSince) / 1000),
        activeSince: null
    });
}

function createStartedTask(task) {
    return Object.assign({}, task, {
        active: true,
        activeSince: Date.now()
    });
}

function createResettedTask(task) {
    return Object.assign({}, task, {
        secondsActive: 0,
        activeSince: task.active ? Date.now() : null
    });
}

function createTaskTimerOverriden(task, timeString) {
    let secondsActive = task.secondsActive;
    if (task.activeSince) {
        secondsActive += Math.floor((Date.now() - task.activeSince) / 1000);
    }
    if (timeString.indexOf('*') === 0) {
        secondsActive = parseTimeSince(timeString.substring(1));
    } else if (timeString.indexOf('-') === 0) {
        secondsActive = Math.max(0, secondsActive - parseTimeStringToSeconds(timeString.substring(1)));
    } else if (timeString.indexOf('+') === 0) {
        secondsActive = secondsActive + parseTimeStringToSeconds(timeString.substring(1));
    } else {
        secondsActive = parseTimeStringToSeconds(timeString);
    }
    return Object.assign({}, task, {
        secondsActive: secondsActive,
        activeSince: task.activeSince ? Date.now() : null
    });
}

function parseTimeStringToSeconds(timeString) {
    const parsedSegments = timeString.split(':').map((segment) => {
        try {
            return parseInt(segment);
        } catch (error) {
            return 0;
        }
    });
    let secondsActive = 0;
    switch (parsedSegments.length) {
        case 1:
            secondsActive += parsedSegments[0] * 60;
            break;
        case 2:
            secondsActive += parsedSegments[0] * 60 * 60;
            secondsActive += parsedSegments[1] * 60;
            break;
        case 3:
            secondsActive += parsedSegments[0] * 60 * 60;
            secondsActive += parsedSegments[1] * 60;
            secondsActive += parsedSegments[2];
            break;
    }
    return secondsActive;
}

function parseTimeSince(timeString) {
    const parsedSegments = timeString.split(':').map((segment) => {
        try {
            return parseInt(segment);
        } catch (error) {
            return 0;
        }
    });
    let date = new Date();
    switch (parsedSegments.length) {
        case 1:
            date.setMinutes(parsedSegments[0]);
            date.setSeconds(0);
            break;
        case 2:
            date.setHours(parsedSegments[0]);
            date.setMinutes(parsedSegments[1]);
            date.setSeconds(0);
            break;
        case 3:
            date.setHours(parsedSegments[0]);
            date.setMinutes(parsedSegments[1]);
            date.setSeconds(parsedSegments[2]);
            break;
    }
    return Math.max(0, Math.floor((Date.now() - date.getTime()) / 1000));
}
