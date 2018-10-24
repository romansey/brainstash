import React from 'react';

import NavigationEntry from './NavigationEntry';

export default class Navigation extends React.Component {

    render() {
        return <nav>
            <ul>
                <NavigationEntry apparence="dark" to="/">Tasks</NavigationEntry>
                <NavigationEntry to="/notes">General Notes</NavigationEntry>
                <NavigationEntry to="/settings">Settings</NavigationEntry>
            </ul>
        </nav>;
    }

}
