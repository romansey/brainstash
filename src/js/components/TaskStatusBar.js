import React from 'react';
import { connect } from 'react-redux';

import TaskSum from './TaskSum';

class TaskStatusBar extends React.Component {

    render() {
        return <div className="task-status-bar">
            <TaskSum tasks={this.props.tasks} />
        </div>;
    }

}

export default connect((store) => {
    return {
        tasks: store.tasks.tasks
    };
})(TaskStatusBar);
