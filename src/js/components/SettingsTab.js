import React from 'react';
import { connect } from 'react-redux';

import * as settingsActions from '../actions/settingsActions';

class SettingsTab extends React.Component {

    setStartNewTasksImmediately(e) {
        this.props.dispatch(settingsActions.setStartNewTasksImmediately(e.target.checked));
    }

    render() {
        return <section className="tab tab-settings">
            <div className="setting">
                <label>
                    <input type="checkbox" checked={this.props.settings.startNewTasksImmediately} onChange={this.setStartNewTasksImmediately.bind(this)} />
                    <span className="label-body">Start new tasks immediately after creation</span>
                </label>
            </div>
        </section>;
    }

}

export default connect((store) => {
    return {
        settings: store.settings
    };
})(SettingsTab);
