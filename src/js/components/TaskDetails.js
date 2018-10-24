import React from 'react';
import { connect } from 'react-redux';

import CreateForm from './CreateForm';
import * as taskActions from '../actions/taskActions';

class TaskDetails extends React.Component {

    renameTask(e) {
        this.props.dispatch(taskActions.renameTask(this.props.task, e.target.value));
    }

    changeTaskNotes(e) {
        this.props.dispatch(taskActions.changeTaskNotes(this.props.task, e.target.value));
    }

    setTimer(timeString) {
        this.props.dispatch(taskActions.setTimer(this.props.task, timeString));
    }

    render() {
        return <div className="task-details">
            <div className="details-title"><input type="text" placeholder="Task Name" value={this.props.task.title} onChange={this.renameTask.bind(this)} /></div>
            <div className="override-timer">
                <CreateForm inputPlaceholder="Override Timer" tooltip="Set: XX:XX, Add: +XX:XX, Subtract: -XX:XX, Time Since: *XX:XX" buttonLabel="Set" onSubmit={this.setTimer.bind(this)} />
            </div>
            <div className="details-notes"><textarea placeholder="Type your task notes here ..." value={this.props.task.notes} onChange={this.changeTaskNotes.bind(this)} /></div>
        </div>;
    }

}

export default connect()(TaskDetails);
