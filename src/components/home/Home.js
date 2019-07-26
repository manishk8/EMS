import React, { Component } from 'react'
import AddExpense from './AddExpense';
import ExpenseTable from './ExpenseTable';
import { addExpense } from '../../action';
import { connect } from 'react-redux';
import BudgetOverview from './BudgetOverview';
import CategoryChart from './CategoryChart';

class Home extends Component {
    constructor() {
        super();
        this.state = {
        }
        this.totalExpense = 0;
        this.expenses = []
    }

    onChange = (e) => {
        console.log("e.target.id", e.target.id, "e.target.value", e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    expenseSave = () => {
        this.props.dispatch(addExpense(
            this.expenses.push(this.state)
        )
        )
        this.setState({ category: [], name: '', price: '', date: '' })
    }

    render() {
        let newExpenses = this.expenses;
        for (var i = 0; i < newExpenses.length; i++) {
            this.totalExpense += Number(newExpenses[i].price);
        }
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="row" style={{ paddingTop: "40px" }}>
                        <div className="col-md-6">
                            <BudgetOverview budget={this.props.budget} myprice={this.myprice} totalExpense={this.totalExpense} />
                        </div>
                        <div className="col-md-6">
                            <CategoryChart />
                        </div>
                    </div>

                    <button type="button" className="btn btn-default addBtn" data-toggle="modal" data-target="#myModal">Add Expense</button>

                    <AddExpense
                        category={this.props.category}
                        name={this.props.name}
                        price={this.props.price}
                        date={this.props.date}
                        expenseSave={this.expenseSave}
                        onChange={this.onChange}
                    />

                    <ExpenseTable
                        expenses={this.expenses}
                        category={this.props.category}
                        name={this.props.name}
                        price={this.props.price}
                        date={this.props.date}
                    />

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        category: state.category,
        name: state.name,
        price: state.price,
        date: state.date,
        budget: state.budget,
    }
}

export default connect(mapStateToProps)(Home);