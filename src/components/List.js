import React, { Component } from 'react';

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