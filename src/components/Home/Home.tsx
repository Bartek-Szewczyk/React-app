import React,{FC, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { pushActualSite } from '../../actions/actualSiteAction';
import { ISingleUser } from '../../entities/users';
import { IState } from '../../reducers';
import { IPhotoReducer } from '../../reducers/photoReducers';
import { IPostsReducer } from '../../reducers/postsReducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { Resume } from '../Resume/Resume';
import { Workspaces } from '../Workspaces/Workspaces';

type PushActualSite = ReturnType<typeof pushActualSite>;

const Wrapper=styled.div`
    width:100%;
`;
const InnerWrapper=styled.div`
 width:100%;
    height: 400px;
    display:flex;
    box-shadow: 0 0 1em grey;
    border-radius:5px;
    overflow: hidden;
`;

const DivImg=styled.div`
height:100%;
width:400px;

`;
const ImgLatestPublication = styled.img`
    width:100%
`;

const LatestPublicationDiv=styled.div`
    padding-left: 10px;
    text-align:left;
`;
 const Title= styled.h2`
    text-align:left;
 `;

 const SeeMore = styled.p`
    color:blue;
    margin-top: 20px;
    font-weight: bold;
 `;

const Publications= styled.div`
    text-align:left;
`;

 const SinglePublication = styled.div`
    display:flex;
    margin:5px;
 `;

 const SinglePublicationContent=styled.div`
    padding-left:10px;
 `;

 const SingleImg=styled.img`
    width:80px;
 `;

 const Date= styled.span`
    margin-top: auto;
    margin-bottom:auto;
 `;

 const Profile = styled.div`
    display: flex;
    algin-item:center;
 `;
 const ProfilePic=styled.img`
    width: 25px;
    border-radius: 50%;
    margin-top: auto;
    margin-bottom:auto;
    margin-left:5px;
    margin-right:5px
`;

  const ProfileName = styled.span`
    margin-top: auto;
    margin-bottom:auto;
  `;
  const SingleTitle= styled.h3`
  
  `;


interface IHome{
    user:{
        name: string,
        picture: string
    }

}


export const Home: FC<IHome> = props=>{

const { photoList }= useSelector<IState, IPhotoReducer>(globalState => ({
    ...globalState.photos
  }))

 const { postList }= useSelector<IState, IPostsReducer>(globalState => ({
    ...globalState.posts
  }))
const { usersList }= useSelector<IState, IUsersReducer>(globalState => ({
    ...globalState.users,
  }))


  const photo = {
      src: photoList[56]? photoList[56].url:" "
  };

const dispatch = useDispatch();
 useEffect(()=>{
    dispatch<PushActualSite>(pushActualSite({ 
      name: 'Home',
      icon: '../Media/icons/house.png'
  }))
  },[dispatch]);

   function getUserPost(user: ISingleUser) {
       if(user !== undefined){
           for (let i = 0; i < postList.length; i++) {
           const el = postList[i];
           if(el.id===user.id){
               return el.title;
           }
       }
       }
       
       return "";
   }
   function rand( min: number, max: number ){
      if ( min > max ){
        let tmp = min;
        min = max;
        max = tmp;
    }
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}
 function getUserPhoto(user : ISingleUser) {
   for (let i = 0; i < photoList.length; i++) {
     const e = photoList[i];
     if(e.id===user.id){
        return e.url
     }
   }
   return "No photo";
 }



  const NewUser1 = usersList[rand(0,9)];
  const NewUser2 = usersList[rand(0,9)];
  const NewUser3 = usersList[rand(0,9)];
    return(
        
    <Wrapper> 
        <InnerWrapper>
        <DivImg>
            <ImgLatestPublication src={photo.src}/>
            
        </DivImg>
        <LatestPublicationDiv>
            <Title>Latest Publication</Title>
            <Publications>
                <SinglePublication>
                    <SingleImg src={photoList[1]? photoList[rand(1,100)].url: " "}/>
                    <SinglePublicationContent>
                        <SingleTitle>{postList? getUserPost(NewUser1):" "}</SingleTitle>
                    <Profile>
                        <Date> 7 jan.2020 </Date>
                        <ProfilePic src={getUserPhoto(NewUser1)} />
                        <ProfileName> {NewUser1? NewUser1.name :""}</ProfileName>
                    </Profile>
                    </SinglePublicationContent>
                    
                </SinglePublication>
                <SinglePublication>
                    <SingleImg src={photoList[1]? photoList[rand(1,100)].url: " "}/>
                    <SinglePublicationContent>
                        <SingleTitle>{postList? getUserPost(NewUser2):" "}</SingleTitle>
                    <Profile>
                        <Date> 15 feb.2020 </Date>
                        <ProfilePic src={getUserPhoto(NewUser2)} />
                        <ProfileName> {NewUser2? NewUser2.name :""}</ProfileName>
                    </Profile>
                    </SinglePublicationContent>
                    
                </SinglePublication>
                <SinglePublication>
                    <SingleImg src={photoList[1]? photoList[rand(1,100)].url: " "}/>
                    <SinglePublicationContent>
                        <SingleTitle>{postList? getUserPost(NewUser3):" "}</SingleTitle>
                    <Profile>
                        <Date> 28 apr.2020 </Date>
                        <ProfilePic src={getUserPhoto(NewUser3)} />
                        <ProfileName> {NewUser3? NewUser3.name :""}</ProfileName>
                    </Profile>
                    </SinglePublicationContent>
                    
                </SinglePublication>

            </Publications>


            <SeeMore>See more publications</SeeMore>
        </LatestPublicationDiv>
        
          </InnerWrapper>
        <Workspaces/>
        <Resume/>

    </Wrapper>

)
}