import React from 'react';

import { formatTime } from '../utils/formatUtils';
import Timer from './Timer';

export default class TaskSum extends React.Component {

    render() {
        let timer;
        let activeTask;
        let sumSecondsActive = 0;
        this.props.tasks.forEach((task) => {
            if (task.active) {
                activeTask = task;
            }
            sumSecondsActive += task.secondsActive;
        });
        if (activeTask) {
            timer = <Timer initialSeconds={sumSecondsActive} startedAt={activeTask.activeSince} />;
        } else {
            timer = formatTime(sumSecondsActive);
        }

        return <div className="task-sum">
            Total Time: {timer}
        </div>;
    }

}
