import React, { Component } from 'react'
import AddExpense from './AddExpense';
import ExpenseTable from './ExpenseTable';
import { addExpense } from '../../action';
import { connect } from 'react-redux';

class Home extends Component {
    constructor() {
        super();
        this.state = {
        }
        this.myArray = []
    }

    stateUpdate = (e) => {
        console.log(e.target.id, e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    formSave = () => {
        // localStorage.setItem("name", "manish")
        // this.myArray.push(this.state)
        // this.setState({ categoryStore: '', nameStore: '', priceStore: '', dateStore: '' })

        this.props.dispatch(addExpense(
            this.myArray.push(this.state)

            // categoryStore: this.state.categoryStore,
            // nameStore: this.state.nameStore,
            // priceStore: this.state.priceStore,
            // dateStore: this.state.dateStore,
            // editRow: 0
        )
        )
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">

                    <button type="button" className="btn btn-default addBtn" data-toggle="modal" data-target="#myModal">Add Expense</button>

                    <AddExpense
                        categoryStore={this.props.categoryStore}
                        nameStore={this.props.nameStore}
                        priceStore={this.props.priceStore}
                        dateStore={this.props.dateStore}
                        formSave={this.formSave}
                        stateUpdate={this.stateUpdate}
                    />

                    <ExpenseTable
                        myArray={this.myArray}
                        categoryStore={this.props.categoryStore}
                        nameStore={this.props.nameStore}
                        priceStore={this.props.priceStore}
                        dateStore={this.props.dateStore}
                    />

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state, "state")
    return {
        mycategory: state.categoryStore,
        myname: state.nameStore,
        myprice: state.priceStore,
        mydate: state.dateStore
    }
}

export default connect(mapStateToProps)(Home);