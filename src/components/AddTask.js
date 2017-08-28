import React, {Component} from 'react';

class AddTask extends Component {
	constructor() {
		super();
		this.state = {
			value :"",
		}
	}	

	render() {
		return (
			<form onSubmit={ (e)=> {
				e.preventDefault();
				this.setState({ value : ""});
				this.props.AddTask(this.state.value);
				this.setState({ value : "" });
			}}>
				<div className="input-group">
					<label htmlFor="add">Add a task :</label>
					<input 
						onChange={ (e)=> {this.setState({value : e.target.value }) }} 
						id="add" 
						className="form-control" 
						type="text" 
						name="add"
						value={this.state.value} /> 
				</div>	
				<button type="submit" className="btn btn-success">Send</button>
			</form>
		)
	}
};

export default AddTask;