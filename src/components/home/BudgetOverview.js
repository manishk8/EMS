import React, { Component } from 'react'

export default class BudgetOverview extends Component {
    render() {
        return (
            <div className="row" style={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                <div className="col-md12">
                    <div className="row" style={{ borderBottom: "1px solid rgba(0,0,0,0.12)" }}>
                        <div className="col-md-12" style={{ padding: "8px 16px" }}>
                            <p style={{ textAlign: "center" }}>Budget Overview</p>
                        </div>
                    </div>
                    <div className="row" style={{ padding: "16px 24px" }}>
                        <div className="col-md-6">
                            <div className="circle">
                                <span>80% spent</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <p>Total Budget:</p>
                                <p>Rs. {this.props.budgetStore}</p>
                            </div>
                            <div>
                                <p>Total Expenses:</p>
                                <p>Rs. {this.props.myprice}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
