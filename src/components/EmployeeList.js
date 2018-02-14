import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
	componentWillMount() {
		this.props.employeesFetch();

		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		})
	}

	render() {
		return (
			<View>
				<Text>Employee List</Text>
				<Text>Employee List</Text>
				<Text>Employee List</Text>
				<Text>Employee List</Text>
				<Text>Employee List</Text>
				<Text>Employee List</Text>
				<Text>Employee List</Text>
			</View>
		)
	}
}

export default connect(null, { employeesFetch })(EmployeeList);