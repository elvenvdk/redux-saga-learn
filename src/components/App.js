import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsersRequest } from '../actions/users';

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getUsersRequest();
	}

	render() {
		return <div className='App'>Test</div>;
	}
}

export default connect(
	null,
	{ getUsersRequest }
)(App);
