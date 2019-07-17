import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="container-fluid dashboard">
                <Header />
                <div className="row wrapper">
                    <div className="col-sm-3 sidebar">
                        <Sidebar />
                    </div>
                    <div className="col-sm-9 content">
                        <Route exact path={this.props.path} component={this.props.component} />
                    </div>
                </div>
            </div>
        )
    }
}
