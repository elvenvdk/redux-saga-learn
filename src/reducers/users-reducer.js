import { Types } from "../actions/types";

const INITIAL_STATE = {
	items: []
};

export default (UsersReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case Types.GET_USERS_SUCCESS:
			return {
				items: action.payload.items
			};
		default:
			return state;
	}
});
