import { combineReducers } from 'redux';
import ActiveUserReducer from './ActiveUserReducer';
import UserReducer from './UserReducer';

const allReducer = combineReducers({
    user: UserReducer,
    activeReducer: ActiveUserReducer,
});

export default allReducer;