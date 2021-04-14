import users, { IUsersReducer } from './usersReducers';
import photos, { IPhotoReducer } from './photoReducers';
import { combineReducers } from 'redux';


export default combineReducers({
    users,
    photos,
    
})

export interface IState{
    users: IUsersReducer;
    photos: IPhotoReducer;
}