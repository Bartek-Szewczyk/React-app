import users, { IUsersReducer } from './usersReducers';
import photos, { IPhotoReducer } from './photoReducers';
import actualSite, {IActualSiteReducer} from './actualSiteReducers'
import posts, {IPostsReducer} from './postsReducers'
import { combineReducers } from 'redux';


export default combineReducers({
    users,
    photos,
    actualSite,
    posts
    
})

export interface IState{
    users: IUsersReducer;
    photos: IPhotoReducer;
    actualSite: IActualSiteReducer;
    posts: IPostsReducer;
}