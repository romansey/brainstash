import React from 'react';

import {formatTime} from '../utils/formatUtils';

export default class Timer extends React.Component {

    componentDidMount() {
        this.interval = setInterval(this.forceUpdate.bind(this), 100);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const overallSeconds = Math.floor(this.props.initialSeconds +
            (Date.now() - this.props.startedAt) / 1000);
        return <span>{formatTime(overallSeconds)}</span>;
    }

}
