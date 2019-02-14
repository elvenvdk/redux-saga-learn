import axios from 'axios';

export const getUsers = () => {
	// axios.defaults.withCredentials = true;
	axios.defaults.baseURL =
		'https://cors-anywhere.herokuapp.com/https://rem.dbwebb.se/api';
};
