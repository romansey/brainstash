import React from 'react';
import { NavLink } from "react-router-dom";

class NavigationEntry extends React.Component {

    render() {
        return <li className={this.props.apparence}>
                <NavLink exact to={this.props.to} activeClassName="active">
                    <div className="nav-link-content">
                        {this.props.children}
                    </div>
                </NavLink>
        </li>;
    }

}

export default NavigationEntry;
