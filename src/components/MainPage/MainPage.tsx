import React,{FC, useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';

import {Navbar} from '../Navbar/Navbar';
import {LeftMenu} from '../LeftMenu/LeftMenu';
import {Home} from '../Home/Home';
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
import { Entities } from '../Entities/Entities';


type GetUsers = ReturnType<typeof getUsers>;
type GetPhoto = ReturnType<typeof getPhoto>;



const Wrapper = styled.div`
  width:100vw;
  text-align: center;
  font-family: 'Nunito', sans-serif;
  display: flex;
`;

const InnerWrapper = styled.div`
  width:100%;
  margin-left:auto;
  margin-right:auto;
`;


const Content = styled.div`
  width: 1200px;
  height: 400px;
  margin-top:20px;
  box-shadow: 0 0 1em grey;
  margin-left:auto;
  margin-right:auto;
`;


const Workspaces=styled.div`
 width: 1200px;
  height: 300px;
  align-items: center;
  margin-left:auto;
  margin-right:auto;
  margin-top:20px
`;

const InnerWorkspaces=styled.div`
  width:100%;
  height:100%;
  background-color: grey;
  display: flex;
 align-items: center;
`;
 const SectionName=styled.h2`
 text-align: left;
 color:grey;
 `;

 const WorkspacesBox=styled.div`
 background-color:black;
 width:300px;
 height:250px;
 justify-content: center;
 align-items: center;
 margin: 10px
 `;

const SiteMenu={
  title: " ",
  icon: " "
}

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
      <Navbar user={User}/>
      <Wrapper>
        <LeftMenu user={User}/>
        <InnerWrapper>
          <Content>
            <Switch>
              <Route path="/publications" >
               <Error404/>
              </Route>
              <Route path="/people">
                <Error404/>
              </Route>
              <Route path="/entities">
                <Entities/>
              </Route>
              <Route path="/administration">
                <Error404/>
              </Route>
              <Route path="/ecosystem">
                <Error404/>
              </Route>
              <Route path="/404">
                <Error404/>
              </Route>
              <Route path="/">
                <Home/>
              </Route>
            </Switch>
          </Content>
          <Workspaces>
            <SectionName>
              Workspaces
            </SectionName>
            <InnerWorkspaces>
              <WorkspacesBox>

              </WorkspacesBox>

            </InnerWorkspaces>
          </Workspaces>

        </InnerWrapper>
      </Wrapper>
    </Router>
  );
};

export function setSite(title:string, icon:string){
  SiteMenu.title = title;
  SiteMenu.icon = icon;
}




export default App;
