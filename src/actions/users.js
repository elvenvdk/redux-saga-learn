import { Types } from './types';

export const getUsersRequest = () => ({
	type: Types.GET_USERS_REQUEST
});

export const getUsersSuccess = ({ items }) => ({
	type: Types.GET_USERS_SUCCESS,
	payload: {
		items
	}
});
