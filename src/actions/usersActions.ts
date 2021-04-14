import { Dispatch } from 'redux';
import * as actionTypes from '../actions/actiontypes/userTypes';
import { ISingleUser } from '../entities/users';

export const getUsers = (): Promise<any> => ((dispatch: Dispatch)=>{
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((users: ISingleUser[]) =>{
            dispatch({
                type: actionTypes.GET_USERS,
                users
            })
        })
}) as any;