// import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import AddTask from './AddTask';


class App extends Component {
	constructor(){
		super();
		this.state = {
			tasks: [],
		}
		this._addTaskOnSubmit = this._addTaskOnSubmit.bind(this);
	}
	_addTaskOnSubmit(task){
		this.state({
			task : [

				...
				tasks

			]
		});

	}

	render() {
		console.log(this.state.tasks);
		return (
			<div>
				<AddTask AddTask={this._addTaskOnSubmit} />
			</div>
			)
	}
};

export default App;