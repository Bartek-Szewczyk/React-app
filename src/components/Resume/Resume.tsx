import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { ISingleUser } from '../../entities/users';
import { IState } from '../../reducers';
import { IPostsReducer } from '../../reducers/postsReducers';
import { IUsersReducer } from '../../reducers/usersReducers';

const Wrapper=styled.div`
    width: 1200px;
    align-items: center;
    margin-left:auto;
    margin-right:auto;
    margin-top:40px;
    position:relative;
`;
const InnerWrapper=styled.div`
    width:100%;
    align-items: center;
    position:relative;
`;

const Navigate=styled.div`

`;
const SectionName=styled.h2`
    text-align: left;
    color:grey;
    padding-left:15px;
    margin-bottom:0px
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
    const { postList }= useSelector<IState, IPostsReducer>(globalState => ({
    ...globalState.posts
    }))
    const { usersList }= useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users,
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
let post: Array<any>=[];
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
                                    <Logo src="../Media/logo.png"/>
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
                                    Update 3 days ago by {User.name}
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
            </Navigate>
           {doThis()}

            </InnerWrapper>
        </Wrapper>
    )
}