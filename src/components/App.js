import React, {Component} from 'react';
import { v4 } from 'node-uuid';
import AddTask from './AddTask';
import List from './List';
import Filter from './Filter';

class App extends Component {
	constructor(){
		super();
		this.state = {
			tasks: [],
			filter: 'ALL',
		}
		this._addTaskOnSubmit = this._addTaskOnSubmit.bind(this);
		this._changeTaskStatus = this._changeTaskStatus.bind(this);
		this._onChangeFilter = this._onChangeFilter.bind(this);
	}
	_addTaskOnSubmit(task){
		this.setState({
			tasks : [
				// ...this.state.tasks : on créait un tableau, on récupére l'ancien
				// et on ajoute les nouvelles valeurs
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
	componentDidMount(){
		let storage = JSON.parse(localStorage.getItem('state'));
		if(this.state.tasks.lenght === 0 && storage !== null){
			this.setState({
				tasks : storage
			})
		}
	}
	_onChangeFilter(filter){
		this.setState({
			filter: filter
		});
	}
	componentDidUpdate(){
		if(this.state.tasks.lenght !== 0 ){
			localStorage.setItem('state', JSON.stringify(this.state.tasks));
		}
	}
	render(){
		console.log(this.state.tasks);
		return (
			<div>
				<AddTask AddTask={this._addTaskOnSubmit} />
				<List tasks={this.state.tasks} changeStatus={this._changeTaskStatus} filter={this.state.filter} />
				<Filter onChangeFilter={this._onChangeFilter} />
			</div>
		)
	}
};

export default App;