import React, { FC } from 'react';
import useDropdown from 'react-dropdown-hook';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { ISingleUser } from '../../entities/users';
import { IState } from '../../reducers';
import { IPhotoReducer } from '../../reducers/photoReducers';
import { IPostsReducer } from '../../reducers/postsReducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { List } from './List';

const Wrapper=styled.div`
    width: 1200px;
    align-items: center;
    margin-left:auto;
    margin-right:auto;
    margin-top:50px;
    margin-bottom: 50px;
    clear:both;
`;
const InnerWrapper=styled.div`
    width:100%;
    align-items: center;
    position:relative;
`;

const Navigate=styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:0px
`;
const SectionName=styled.h2`
    text-align: left;
    color:grey;
    padding-left:15px;
    margin-bottom:0px;
    justify-content: center;
    align-items: center;
 `;
 const InputWrapper = styled.div`
    text-align: left;
    width:250px;
    display: inline-block;
    margin-right:40px;
`;
const Filter = styled.input`
    width: 95%;
    font-size: 20px;
    padding: 5px;
`;

const Followed=styled.div`
    padding-top:6px;
    width: 150px;
    align-items: center;
`;

const FolMenu = styled.div`
    width:100%;
    display: inline-flex;
    font-size: 20px;
    justify-content: space-between;
    color:blue;
    align-items: center;
`;

const SinglePost=styled.div`
    width:100%;
    box-shadow: 0 0 4px grey;
    border-radius: 5px;
    text-align:left;
    padding-bottom:10px;
`;

const PostTitle=styled.h2`
    padding-top: 5px;
    color:blue;
    padding-left:10px;
`;

const PostContent=styled.p`
    padding-left:10px;
    width:95%;
`;

const PostInfo=styled.div`
    display:flex;
    margin-left:10px;
    margin-top:10px;
`;

const Logo=styled.img`
    height:30px;
    margin-right:10px;
    border-radius:50%;
`;
const Icon=styled.img`
    margin-right:10px;
`;
const Company=styled.span`
    display:flex;
    justify-content: center;
    align-items: center;
`;
const Category=styled.span`
    display:flex;
    justify-content: center;
    align-items: center;
`;
const Update= styled.span`
    display:flex;
    justify-content: center;
    align-items: center;
    color:grey;
`;

const Dot = styled.span`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-left:15px;
    margin-right:15px;
`;



export const Resume: FC = ()=>{

    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const { postList }= useSelector<IState, IPostsReducer>(globalState => ({
    ...globalState.posts
    }))
    const { usersList }= useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users,
    }))
    const { photoList }= useSelector<IState, IPhotoReducer>(globalState => ({
    ...globalState.photos
  }))


     function getUserPostTitle(user: ISingleUser) {
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
   function getUserPostContent(user: ISingleUser) {
       if(user !== undefined){
           for (let i = 0; i < postList.length; i++) {
           const el = postList[i];
           if(el.id===user.id){
               return el.body;
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

let post: Array<object>=[];
   function doThis(){
       
        for (let i = 0; i < 9; i++) {

             const NewUser= usersList[i];

                const User= {
                id: NewUser? NewUser.id :"",
                name: NewUser? NewUser.name :"",
                jobTitle: NewUser? NewUser.company.catchPhrase :"Job Title",
                company: NewUser? NewUser.company.name :"Company"

                 }


                post.push(<SinglePost>
                            <PostTitle>
                                {postList? getUserPostTitle(usersList[i]):" "}
                            </PostTitle>
                            <PostContent>
                                {postList? getUserPostContent(usersList[i]):" "}
                            </PostContent>
                            <PostInfo>
                                <Company>
                                    <Logo src={photoList[i]? photoList[i].url:" "}/>
                                <p>{User.company}</p> 
                                </Company>
                                <Dot>
                                    <img src="../Media/icons/dot.svg" style={{width:'4px'}} alt=""/>
                                </Dot>
                                <Category>
                                    <Icon src="../Media/icons/entities2.svg" alt=""/>
                                    <p>Corporate</p> 
                                </Category>
                                <Dot>
                                    <img src="../Media/icons/dot.svg" style={{width:'4px'}} alt=""/>
                            </Dot>
                                <Update>
                                    Update {rand(1, 20)} days ago by {User.name}
                                </Update>
                                
                            </PostInfo>
                        
                        </SinglePost>
                )
                
        }
       return post
       
   }

    return(
        <Wrapper>
            <InnerWrapper>
                <Navigate>
                    <SectionName>
                        Resume your work
                    </SectionName>
                    <div style={{display:'flex'}}>
                        <InputWrapper>
                            <Filter type="text" placeholder="Filter by title..."/>
                            <img className="searchIcon" src="./Media/icons/search.png" alt=""/>
                    </InputWrapper>
                    <Followed ref={wrapperRef}>
                         <FolMenu onClick={toggleDropdown}>
                            <div>
                                <img style={{height:'20px'}} src='../Media/icons/followed.svg' alt=""/>
                            <span style={{paddingLeft: "10px"}}>Followed</span> 
                            </div>
                            
                            <div> <img style={{paddingRight: "10px", fill:"blue"}} src="./Media/icons/arrow-down.svg" alt=""/></div>
                        
                        </FolMenu>
                        <div>
                            {dropdownOpen &&
                            <List/>}</div>
                    </Followed>
                    </div>
                    
                </Navigate>
           {doThis()}

            </InnerWrapper>
        </Wrapper>
    )
}