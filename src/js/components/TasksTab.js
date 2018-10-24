import React from 'react';
import { connect } from 'react-redux';

import TaskList from './TaskList';
import TaskDetails from './TaskDetails';
import TaskActionBar from './TaskActionBar';
import TaskStatusBar from './TaskStatusBar';

class TasksTab extends React.Component {

    render() {
        const selectedTasks = this.props.tasks.filter((task) => {
            return task.selected;
        });
        let taskDetails;
        if (selectedTasks.length > 0) {
            taskDetails = <TaskDetails task={selectedTasks[0]} />
        }

        return <section className="tab tab-tasks">
            <TaskActionBar />
            <TaskList tasks={this.props.tasks} />
            {taskDetails}
            <TaskStatusBar />
        </section>;
    }

}

export default connect((store) => {
    return {
        tasks: store.tasks.tasks
    };
})(TasksTab);
