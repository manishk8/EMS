import React, { Component } from 'react';
import { addCategory, addBudget } from '../../action';
import { connect } from 'react-redux';

class Setting extends Component {
    constructor() {
        super();
        this.state = {
        }
        this.categories = [];
    }

    onChangeBudget = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    updateBudget = () => {
        this.props.dispatch(addBudget(
            this.state.budget
        )
        )
        this.setState({ budget: "" })
    }

    onChangeCategory = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    updateCategory = () => {
        console.log("this.state", this.state)
        this.categories.push(this.state.category)
        this.props.dispatch(addCategory(
            this.categories
        )
        )
        console.log("this.categories", this.categories)
        this.setState({ category: "" })
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
                                    <input type="text" className="form-control" id="budget" value={this.state.budget} onChange={this.onChangeBudget} />
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
                                    <input type="text" placeholder="Category Name" className="form-control" id="category" value={this.state.category} onChange={this.onChangeCategory} />
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
                                        this.categories.map((data, id) =>
                                            < tr key={id} >
                                                <td>{data}</td>
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
        category: state.category,
        budget: state.budget
    }
}

export default connect(mapStateToProps)(Setting);
