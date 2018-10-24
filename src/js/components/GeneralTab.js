import React from 'react';
import { connect } from 'react-redux';

import * as settingsActions from '../actions/settingsActions';

class GeneralTab extends React.Component {

    notesChanged(e) {
        this.props.dispatch(settingsActions.updateGeneralNotes(e.target.value));
    }

    render() {
        return <section className="tab tab-general">
            <textarea placeholder="Type your general notes here ..." value={this.props.generalNotes} onChange={this.notesChanged.bind(this)} />
        </section>;
    }

}

export default connect((store) => {
    return {
        generalNotes: store.settings.generalNotes
    };
})(GeneralTab);
