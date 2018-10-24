import React from 'react';

import Header from '../components/Header';

export default class Layout extends React.Component {

    render() {
        return <div className="wrapper">
            <Header />
            {this.props.children}
        </div>;
    }

}
