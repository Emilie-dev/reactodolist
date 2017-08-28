import React from 'react';

const Filter = ({onChangeFilter}) => (
	<select className="btn btn-info"
			onChange={(e) => {onChangeFilter(e.target.value)}}>
		<option value="ALL"> ALL </option>
		<option value="TODO"> Todo </option>
		<option value="DONE"> Done </option>
	</select>
);

export default Filter;