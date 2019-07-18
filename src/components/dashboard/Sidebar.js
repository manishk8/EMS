import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="list-group">
                <Link to="/home" className="list-group-item">
                    Home
                </Link>
                <Link to="/setting" className="list-group-item">
                    Setting
                </Link>
                <Link to="/profile" className="list-group-item">
                    Profile
                </Link>
            </div>
        )
    }
}
