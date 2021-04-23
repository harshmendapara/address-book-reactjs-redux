
import {
	getUsers
} from "../services/userService";
import { startAppLoading, stopAppLoading } from './appActions';
export const SET_USERS = 'SET_USERS';
export const SET_ACTIVE_USER = 'SET_ACTIVE_USER';

export function setUsers(data) {
	return (dispatch) => {
		dispatch({
            type: SET_USERS,
            data
        });
	};
}

export function setActiveUser(data) {
	return (dispatch) => {
		dispatch({
            type: SET_ACTIVE_USER,
            data
        });
	};
}

export function getAllUsers() {
	return async(dispatch) => {
		try {
            dispatch(startAppLoading()); // starts app loader
			const { data } = await getUsers();
            dispatch(setUsers(data.results));
            dispatch(stopAppLoading()); // stops app loader
		} catch (error) {
			console.log(error);
            dispatch(setUsers([]));
            dispatch(stopAppLoading());
		}
	};
}