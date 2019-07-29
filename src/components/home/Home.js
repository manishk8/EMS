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
            catValue: ''
        }
        this.totalExpense = 0;
        this.expenses = []
    }

    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    expenseSave = () => {
        this.expenses.push(this.state);
        this.props.dispatch(addExpense(
            this.expenses

        )
        )
        this.setState({ category: '', name: '', price: '', date: '' })
    }

    selectCategory = (e) => {
        this.setState({ catValue: e.target.value });
    }

    editExpensesClick = (data, i) => {
        // console.log("iiiiiii", i)
        console.log("data", data)
        console.log("5iiiii", i)
        console.log("this.expenses", this.expenses)
        console.log("this.expenses.name", this.expenses[0].name)
        console.log("data.name", data.name)
        // console.log("this.props.expenses.name", this.data[0].name)

        this.setState({
            category: data.category,
            name: data.name,
            price: data.price,
            date: data.date,
        })
    }

    expenseUpdate = () => {
        console.log("this.props.name", this.props.name)
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
                        name={this.state.name}
                        price={this.state.price}
                        date={this.state.date}
                        expenseSave={this.expenseSave}
                        onChange={this.onChange}
                        handleCategory={this.handleCategory}
                        value={this.state.catValue}
                        selectCategory={this.selectCategory}
                        expenses={this.expenses}
                        expenseUpdate={this.expenseUpdate}
                    />

                    <ExpenseTable
                        expenses={this.expenses}
                        category={this.props.category}
                        name={this.props.name}
                        price={this.props.price}
                        date={this.props.date}
                        catValue={this.state.catValue}
                        editExpensesClick={this.editExpensesClick}
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