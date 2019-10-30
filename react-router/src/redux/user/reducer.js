import constants from './constants';
import initialState from './initialState';

const { IS_FETCHING_USER,SET_USER_ID,SET_USER} = constants;

const reducer = (state = initialState, action) => {
        let { isFetchingUser, userId, user } = state;

        switch (action.type) {
            case IS_FETCHING_USER:
                    isFetchingUser = action.payload
                break;
            case SET_USER_ID:
                userId = action.payload
            break;
            case SET_USER:
                user = action.payload
            break;        
            default:
                break;
        }

        return { isFetchingUser,userId, user};
};

export default reducer;