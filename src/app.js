import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		var config = {
		    apiKey: 'AIzaSyDBlAGJxX9gm61VJW76xZ_Ioo2vv7BcwSM',
		    authDomain: 'employee-manager-4bbe0.firebaseapp.com',
		    databaseURL: 'https://employee-manager-4bbe0.firebaseio.com',
		    projectId: 'employee-manager-4bbe0',
		    storageBucket: 'employee-manager-4bbe0.appspot.com',
		    messagingSenderId: '537570116464'
		};

		firebase.initializeApp(config);
	}

	render() {
		return (
			<Provider store={createStore(reducers)}>
				<View>
					<Header headerText="Manager" />
					<LoginForm />
				</View>
			</Provider>
		)
	}
}

export default App;

