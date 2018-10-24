import React from 'react';
import { connect } from 'react-redux';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

import TaskRow from './TaskRow';
import * as taskActions from '../actions/taskActions';

const SortableItem = SortableElement(({value}) =>
    <TaskRow task={value} />
);

const SortableList = SortableContainer(({items}) => {
  return (
    <div className="task-list-wrapper">
        <ul className="task-list">
            {items.map((value, index) => (
                <SortableItem key={`item-${index}`} index={index} value={value} />
            ))}
        </ul>
    </div>
  );
});

class TaskList extends React.Component {

    onSortEnd({oldIndex, newIndex}) {
        this.props.dispatch(taskActions.moveTask(this.props.tasks[oldIndex], newIndex));
    }

    render() {
        return <SortableList
            items={this.props.tasks}
            distance={5}
            lockAxis={"y"}
            onSortEnd={this.onSortEnd.bind(this)} />;
    }

}

export default connect()(TaskList);
