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

        this.props.dispatch(addExpense(
            this.myArray.push(this.state)

        )
        )
        this.setState({ categoryStore: '', nameStore: '', priceStore: '', dateStore: '' })

    }

    render() {
        let newArr = this.myArray;
        for (var i = 0; i < newArr.length; i++) {
            this.totalExpense += Number(newArr[i].priceStore);
        }
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="row" style={{ paddingTop: "40px" }}>
                        <div className="col-md-6">
                            <BudgetOverview budgetStore={this.props.budgetStore} myprice={this.myprice} totalExpense={this.totalExpense} />
                        </div>
                        <div className="col-md-6">
                            <CategoryChart />
                        </div>
                    </div>

                    <button type="button" className="btn btn-default addBtn" data-toggle="modal" data-target="#myModal">Add Expense</button>

                    <AddExpense
                        categoryStore={this.props.addCategoryStore}
                        nameStore={this.props.nameStore}
                        priceStore={this.props.priceStore}
                        dateStore={this.props.dateStore}
                        formSave={this.formSave}
                        stateUpdate={this.stateUpdate}
                        addCategoryStore={this.props.addCategoryStore}
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
        mydate: state.dateStore,
        budgetStore: state.addBudget,
        addCategoryValue: state.addCategoryStore,
    }
}

export default connect(mapStateToProps)(Home);