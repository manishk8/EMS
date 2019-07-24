import React, { Component } from 'react';
import { addCategoryName, addBudgetName } from '../../action';
import { connect } from 'react-redux';

class Setting extends Component {
    constructor() {
        super();
        this.myArray = [];
        this.budgetValue = ""
    }

    updateBudget = () => {
        this.props.dispatch(addBudgetName(
            this.budgetValue = this.state.budgetStore
        )
        )
    }

    stateUpdateBudget = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    stateUpdateCategory = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    updateCategory = () => {
        this.props.dispatch(addCategoryName(
            this.myArray.push(this.state)
        )
        )
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="row" style={{ paddingTop: "24px" }} >
                        <div className="col-md-4">
                            <p style={{ textAlign: "right" }}>Total Budget:</p>
                        </div>
                        <div className="col-md-4">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="budgetStore" value={this.props.budgetStore} onChange={this.stateUpdateBudget} />
                                </div>
                                <p>{this.budgetValue}</p>
                            </form>
                        </div>
                        <div className="col-md-4">
                            <button type="button" className="btn btn-default" data-toggle="modal" onClick={this.updateBudget}>Update</button>
                        </div>
                    </div>
                    <div className="row" style={{ paddingTop: "40px" }}>
                        <div className="col-md-4">
                            <p style={{ textAlign: "right" }}>Categories</p>
                        </div>
                        <div className="col-md-4">
                            <form>
                                <div className="form-group">
                                    <input type="text" placeholder="Category Name" className="form-control" id="addCategoryStore" value={this.props.addCategoryStore} onChange={this.stateUpdateCategory} />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4">
                            <button type="button" className="btn btn-default" onClick={this.updateCategory}>Add</button>
                        </div>
                    </div>
                    <div className="row" style={{ paddingTop: "24px" }}>
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <table className="table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th>Category</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.myArray.map((name, id) =>
                                            // console.log("name.addCategoryStore", name.addCategoryStore)
                                            < tr key={id} >
                                                <td>{name.addCategoryStore}</td>
                                                <td><img src="/images/baseline_delete_outline_black_24dp.png" alt="logo" className="editIcon" data-toggle="modal" data-target="#myModal" /></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addCategoryStore: state.addCategoryStore,
        budgetStore: state.budgetStore
    }
}

export default connect(mapStateToProps)(Setting);
