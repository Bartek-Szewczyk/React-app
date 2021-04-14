import React,{FC, useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';

import {Navbar} from '../Navbar/Navbar';
import {LeftMenu} from '../LeftMenu/LeftMenu';
import {Publications} from '../Publications/Publications';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Error404 } from '../../Error/Error404';

import {getUsers} from "../../actions/usersActions"
import {getPhoto} from "../../actions/photoAction"
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { IPhotoReducer } from '../../reducers/photoReducers';
import { ISingleUser } from '../../entities/users';

type GetUsers = ReturnType<typeof getUsers>;
type GetPhoto = ReturnType<typeof getPhoto>;

const Wrapper = styled.div`
  width:100vw;
  text-align: center;
`;

const InnerWrapper = styled.div`
  width:100%;
  margin-left:auto;
  margin-right:auto;
  display:flex;
`;


const Content = styled.div`
  max-width: 1200px;
  align-items: center;
  margin-left:auto;
  margin-right:auto;
  margin-top:20px
`;



const App:FC =()=>{

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch<GetUsers>(getUsers());
    dispatch<GetPhoto>(getPhoto());
  },[dispatch]);

const { usersList }= useSelector<IState, IUsersReducer>(globalState => ({
    ...globalState.users,
  }))

  const { photoList }= useSelector<IState, IPhotoReducer>(globalState => ({
    ...globalState.photos
  }))

 function getUserPhoto(user : ISingleUser) {
   for (let i = 0; i < photoList.length; i++) {
     const e = photoList[i];
     if(e.id===user.id){
        return e.url
     }
   }
   return "No photo";
 }
function rand( min: number, max: number ){
      if ( min > max ){
        let tmp = min;
        min = max;
        max = tmp;
    }
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}
const NewUser= usersList[rand(0,9)];

const User= {
  name: NewUser? NewUser.name :"",
  jobTitle: NewUser? NewUser.company.catchPhrase :"Job Title",
  company: NewUser? NewUser.company.name :"Company",
  picture: photoList? getUserPhoto(NewUser):"../..//img/user.jpg",

}

 return(
    <Router>
      <Wrapper>
        <Navbar user={User}/>
        <InnerWrapper>
          <LeftMenu user={User}/>
          <Content>
            <Switch>
              <Route path="/publications">
                <Publications/>
              </Route>
              <Route path="/people">
                people content
              </Route>
              <Route path="/entities">
                entities content
              </Route>
              <Route path="/administration">
                Administration content
              </Route>
              <Route path="/ecosystem">
                Ecosystem content
              </Route>
              <Route path="/404">
                <Error404/>
              </Route>
              <Route path="/">
                
              </Route>
            </Switch>
          </Content>

        </InnerWrapper>
      </Wrapper>
    </Router>
  );
};



export default App;
