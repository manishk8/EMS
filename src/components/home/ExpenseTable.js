import React, { Component } from 'react'

export default class ExpenseTable extends Component {
    render() {
        return (
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.myArray.map((list, id) =>
                            <tr key={id}>
                                <td>{list.categoryStore}</td>
                                <td>{list.nameStore}</td>
                                <td>{list.priceStore}</td>
                                <td>{list.dateStore}</td>
                                <td><img src="/images/baseline_edit_black_24dp.png" alt="logo" className="editIcon" data-toggle="modal" data-target="#myModal" /></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        )
    }
}