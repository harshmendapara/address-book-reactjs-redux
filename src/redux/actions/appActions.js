export const START_APP_LOADING = 'START_APP_LOADING';
export const STOP_APP_LOADING = 'STOP_APP_LOADING';

export function startAppLoading() {
	return (dispatch) => {
		dispatch({
            type: START_APP_LOADING
        });
	};
}

export function stopAppLoading() {
	return (dispatch) => {
		dispatch({
            type: STOP_APP_LOADING
        });
	};
}