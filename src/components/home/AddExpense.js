import React, { Component } from 'react'

export default class AddExpense extends Component {
    constructor() {
        super();
        this.state = {
            catValue: '',
            name: '',
            price: '',
            data: new Date()
        }
    }

    componentDidMount() {
        if (this.props.data !== null) {
            // edit form
            let { data } = this.props;
            this.setState({ catValue: data.catValue, name: data.name, price: data.price, date: data.date });
        } else {
            this.setState({
                catValue: '',
                name: '',
                price: '',
                data: new Date()
            })
        }
    }

    onChange = (event) => {


    }

    selectCategory = (event) => {

    }

    handleSave = () => {
        let body = {
        }
        if (this.props.data !== null) {
            // update form
            this.props.saveData(body, true);
        } else {
            // create new record
            this.props.saveData(body, false);
        }
    }

    render() {

        let categoryList = this.props.category && this.props.category.length > 0
            && this.props.category.map((item, id) => {
                return (
                    <option key={id} value={item}>{item}</option>
                )
            }
            )

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
                                    <select className="form-control" value={this.state.catValue} onChange={this.selectCategory}>
                                        {categoryList}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label >Name:</label>
                                    <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label >Price:</label>
                                    <input type="text" className="form-control" id="price" value={this.state.price} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label >Price:</label>
                                    <input type="date" className="form-control" id="date" value={this.state.date} onChange={this.onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.handleSave} >Save</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
