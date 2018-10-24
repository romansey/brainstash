import React from 'react';
import { Link } from "react-router";

import Navigation from './Navigation';

export default class Header extends React.Component {

    render() {
        return <header>
            <img className="logo" src="img/logo.png"/>
            <Navigation />
        </header>;
    }

}
