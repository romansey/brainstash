import React from 'react';
import { connect } from 'react-redux';

import * as taskActions from '../actions/taskActions';
import { formatTime } from '../utils/formatUtils';
import Timer from './Timer';

class TaskRow extends React.Component {

    startTask(e) {
        this.props.dispatch(taskActions.startTask(this.props.task));
        e.stopPropagation();
    }

    stopTask(e) {
        this.props.dispatch(taskActions.stopTask(this.props.task));
        e.stopPropagation();
    }

    selectTask() {
        this.props.dispatch(taskActions.selectTask(this.props.task));
    }

    resetTimer(e) {
        this.props.dispatch(taskActions.resetTimer(this.props.task));
        e.stopPropagation();
    }

    deleteTask(e) {
        if (confirm('Do you really want to delete this task?')) {
            this.props.dispatch(taskActions.deleteTask(this.props.task));
        }
        e.stopPropagation();
    }

    render() {
        let timer;
        let button;
        if (this.props.task.active) {
            timer = <Timer initialSeconds={this.props.task.secondsActive} startedAt={this.props.task.activeSince} />;
            button = <button className="btn-icon" title="Pause Task" onClick={this.stopTask.bind(this)}><i className="icon ion-pause"></i></button>;
        } else {
            timer = formatTime(this.props.task.secondsActive);
            button = <button className="btn-icon" title="Begin Task" onClick={this.startTask.bind(this)}><i className="icon ion-play"></i></button>;
        }

        return <li className={'task-row' + (this.props.task.selected ? ' active' : '')} onClick={this.selectTask.bind(this)}>
            <div className="task-row-title">{this.props.task.title}</div>
            <div className="task-row-timer" title="Tracked Task Time">{timer}</div>
            <div className="task-row-buttons">
                {button}
                <button className="btn-icon" title="Reset Task Timer" onClick={this.resetTimer.bind(this)}><i className="icon ion-refresh"></i></button>
                <button className="btn-icon red" title="Delete Task" onClick={this.deleteTask.bind(this)}><i className="icon ion-close-circled"></i></button>
            </div>
        </li>;
    }

}

export default connect()(TaskRow);
