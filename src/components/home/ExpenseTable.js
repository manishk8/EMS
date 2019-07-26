import React, { Component } from 'react'

export default class ExpenseTable extends Component {
    render() {
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.expenses.map((data, id) =>
                            <tr key={id}>
                                <td>{data.category}</td>
                                <td>{data.name}</td>
                                <td>{data.price}</td>
                                <td>{data.date}</td>
                                <td><img src="/images/baseline_edit_black_24dp.png" alt="logo" className="editIcon" data-toggle="modal" data-target="#myModal" /></td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        )
    }
}