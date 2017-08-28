import React, { Component } from 'react';

const getVisibilityFilter = (filter, tasks) => {
	if(filter === "TODO"){
		return tasks.filter(item => !item.status);
	}

	if(filter === "DONE"){
		return tasks.filter(item => item.status);
	}

	return tasks;
};

class List extends Component {
	render(){
		const rows = this.props.tasks.map(item => (
				<li onClick={() => {
						this.props.changeStatus(item.id);
					}}
					className={ item.status ? 'done':'todo' } 
					key={item.id}
				>{item.content}</li>
			));

		return (
			<ul>
				{rows}
			</ul>
		)
	}
};

export default List;