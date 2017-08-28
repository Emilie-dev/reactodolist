import React, {Component} from 'react';
import { v4 } from 'node-uuid';
import AddTask from './AddTask';
import List from './List';

class App extends Component {
	constructor(){
		super();
		this.state = {
			tasks: [],
		}
		this._addTaskOnSubmit = this._addTaskOnSubmit.bind(this);
		this._changeTaskStatus = this._changeTaskStatus.bind(this);
	}
	_addTaskOnSubmit(task){
		this.setState({
			tasks : [

				...this.state.tasks,
				{content : task, id : v4(), status : false}
			]
		});

	}
	_changeTaskStatus(id){
		this.setState({
			tasks : this.state.tasks.map(item => {
					if(item.id === id){
						return {content : item.content, id : item.id, status : !item.status}
					}
						return item;
			})
		});
	}

	render(){
		console.log(this.state.tasks);
		return (
			<div>
				<AddTask AddTask={this._addTaskOnSubmit} />
				<List tasks={this.state.tasks} changeStatus={this._changeTaskStatus} />
			</div>
		)
	}
};

export default App;