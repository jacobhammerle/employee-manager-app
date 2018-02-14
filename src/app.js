import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';
import Router from './Router';

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
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<Router />
			</Provider>
		)
	}
}

export default App;

