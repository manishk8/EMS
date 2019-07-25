import React, { Component } from 'react';
import { addCategoryName, addBudgetName } from '../../action';
import { connect } from 'react-redux';

class Setting extends Component {
    constructor() {
        super();
        this.state = {
        }
        this.myArray = [];
        this.budgetValue = ""
    }

    updateBudget = () => {
        this.props.dispatch(addBudgetName(
            this.state.addBudget
        )
        )
    }

    stateUpdateBudget = (e) => {
        console.log("e.target.id", e.target.id, "e.target.value", e.target.value)
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

    deleteCategory = () => {

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
                                    <input type="text" className="form-control" id="addBudget" value={this.state.addBudget} onChange={this.stateUpdateBudget} />
                                </div>
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
                                    <input type="text" placeholder="Category Name" className="form-control" id="addCategoryStore" value={this.state.addCategoryStore} onChange={this.stateUpdateCategory} />
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
                            <table className="table table-bordered">
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
                                                <td><img src="/images/baseline_delete_outline_black_24dp.png" alt="icon" className="editIcon" onClick={this.deleteCategory} /></td>
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
        addCategoryValue: state.addCategoryStore,
        budgetStore: state.addBudget
    }
}

export default connect(mapStateToProps)(Setting);
