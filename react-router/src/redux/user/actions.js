import constants from './constants';

const { IS_FETCHING_USER, SET_USER, SET_USER_ID } = constants;

const setIsFetchingUser = isFetching => ({
    type: IS_FETCHING_USER,
    payload : isFetching,
});

export const setUserId = userId => ({
    type:SET_USER_ID,
    payload:userId,
});


const setUser = user => ({
    type:SET_USER,
    payload:user,
}); 

export const getUser = userId => {
    return async dispatch => {
        dispatch(setIsFetchingUser(true))
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`  
        )
        const responseJson = await response.json();
        dispatch(setUser(responseJson));
        dispatch(setIsFetchingUser(false));
    }
};