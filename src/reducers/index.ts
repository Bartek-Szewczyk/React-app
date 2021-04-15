import users, { IUsersReducer } from './usersReducers';
import photos, { IPhotoReducer } from './photoReducers';
import actualSite, {IActualSiteReducer} from './actualSiteReducers'
import { combineReducers } from 'redux';


export default combineReducers({
    users,
    photos,
    actualSite,
    
})

export interface IState{
    users: IUsersReducer;
    photos: IPhotoReducer;
    actualSite: IActualSiteReducer;
}