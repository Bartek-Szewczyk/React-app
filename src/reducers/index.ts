import users, { IUsersReducer } from './usersReducers';
import { combineReducers } from 'redux';


export default combineReducers({
    users
})

export interface IState{
    users: IUsersReducer;
}