import {
	SET_USERS,
    SET_ACTIVE_USER
} from "../actions/userActions";

const initialState = {
	users: [],
    activeUser: null
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS: {
			return { ...state, users: action.data };
		}
		case SET_ACTIVE_USER: {
			return { ...state, activeUser: action.data };
		}
        default:
			return state;
    }
};
export default userReducer;