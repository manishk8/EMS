import React, { Component } from 'react'

export default class AddExpense extends Component {
    render() {
        let categoryList = this.props.category;
        console.log("this.props.name", this.props.name)
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
                                    <label htmlFor="category">Category:</label>
                                    <select className="form-control" id="category">
                                        {
                                            categoryList.length > 0 && categoryList.map((data, id) =>
                                                <option key={id}>{data}</option>
                                            )
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label >Name:</label>
                                    <input type="text" className="form-control" id="name" value={this.props.name} onChange={this.props.onChange} />
                                </div>
                                <div className="form-group">
                                    <label >Price:</label>
                                    <input type="text" className="form-control" id="price" value={this.props.price} onChange={this.props.onChange} />
                                </div>
                                <div className="form-group">
                                    <label >Price:</label>
                                    <input type="date" className="form-control" id="date" value={this.props.date} onChange={this.props.onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.props.expenseSave} >Save</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
