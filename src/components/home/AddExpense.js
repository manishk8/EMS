import React, { Component } from 'react'

export default class AddExpense extends Component {
    render() {
        // console.log("this.props.addCategoryStore", this.props.addCategoryStore)
        return (
            <div id="myModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Modal Header</h4>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="categoryStore">Category:</label>
                                    {/* <input type="text" className="form-control" id="categoryStore" value={this.props.categoryStore} onChange={this.props.stateUpdate} /> */}
                                    <select class="form-control" id="categoryStore">
                                        <option >{this.props.addCategoryStore}</option>
                                        {/* {
                                            this.myArray.map((name, id) =>
                                                // console.log("name.addCategoryStore", name.addCategoryStore)
                                                // < tr key={id} >
                                                //     <td>{name.addCategoryStore}</td>
                                                //     <td><img src="/images/baseline_delete_outline_black_24dp.png" alt="icon" className="editIcon" onClick={this.deleteCategory} /></td>
                                                // </tr>
                                                <option key={id} >{name.addCategoryStore}</option>
                                            )
                                        } */}

                                    </select>
                                </div>
                                <div className="form-group">
                                    <label >Name:</label>
                                    <input type="text" className="form-control" id="nameStore" value={this.props.nameStore} onChange={this.props.stateUpdate} />
                                </div>
                                <div className="form-group">
                                    <label >Price:</label>
                                    <input type="text" className="form-control" id="priceStore" value={this.props.priceStore} onChange={this.props.stateUpdate} />
                                </div>
                                <div className="form-group">
                                    <label >Price:</label>
                                    <input type="date" className="form-control" id="dateStore" value={this.props.dateStore} onChange={this.props.stateUpdate} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.props.formSave} >Save</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
