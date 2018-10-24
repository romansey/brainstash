import React from 'react';
import { connect } from 'react-redux';

import * as taskActions from '../actions/taskActions';
import CreateForm from './CreateForm';

class TaskActionBar extends React.Component {

    createTask(title) {
        this.props.dispatch(taskActions.createTask(title, this.props.startNewTasksImmediately));
    }

    stopActiveTask() {
        this.props.dispatch(taskActions.stopActiveTask());
    }

    resetAllTimers() {
        this.props.dispatch(taskActions.resetAllTimers());
    }

    deleteAllTasks() {
        if (confirm('Do you really want to delete all tasks?')) {
            this.props.dispatch(taskActions.deleteAllTasks());
        }
    }

    render() {
        return <div className="action-bar">
            <div className="group group-left">
                <CreateForm inputPlaceholder="Task Name" buttonLabel="Create" onSubmit={this.createTask.bind(this)} />
            </div>
            <div className="group group-right">
                <button onClick={this.stopActiveTask.bind(this)}>Stop Timers</button>
                <button onClick={this.resetAllTimers.bind(this)}>Reset Timers</button>
                <button className="red" onClick={this.deleteAllTasks.bind(this)}>Delete Tasks</button>
            </div>
        </div>;
    }

}

export default connect((store) => {
    return {
        startNewTasksImmediately: store.settings.startNewTasksImmediately
    };
})(TaskActionBar);
