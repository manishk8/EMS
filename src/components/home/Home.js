import React, { Component } from 'react'
import AddExpense from './AddExpense';
import ExpenseTable from './ExpenseTable';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            categoryStore: '',
            nameStore: '',
            priceStore: '',
            dateStore: '',
            editRow: false
        }
        this.myArray = []
    }

    stateUpdate = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    formSave = () => {
        localStorage.setItem("name", "manish")
        this.myArray.push(this.state)
        this.setState({ categoryStore: '', nameStore: '', priceStore: '', dateStore: '' })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">

                    <button type="button" className="btn btn-default addBtn" data-toggle="modal" data-target="#myModal">Add Expense</button>

                    <AddExpense
                        categoryStore={this.state.categoryStore}
                        nameStore={this.state.nameStore}
                        priceStore={this.state.priceStore}
                        dateStore={this.state.dateStore}
                        formSave={this.formSave}
                        stateUpdate={this.stateUpdate}
                    />

                    <ExpenseTable
                        myArray={this.myArray}
                    />

                </div>
            </div>
        )
    }
}
