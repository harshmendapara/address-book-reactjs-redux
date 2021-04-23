import {
	START_APP_LOADING,
    STOP_APP_LOADING
} from "../actions/appActions";

const initialState = {
	appLoading: false
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case START_APP_LOADING: {
			return { ...state, appLoading: true };
		}
		case STOP_APP_LOADING: {
			return { ...state, appLoading: false };
		}
        default:
			return state;
    }
};
export default appReducer;