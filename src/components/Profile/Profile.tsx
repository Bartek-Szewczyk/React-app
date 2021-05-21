import React, {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import { ErrorMessage, Field, Form, Formik, useField } from 'formik';
import { useDispatch} from 'react-redux';
import { pushActualSite } from '../../actions/actualSiteAction';
import { profile } from 'node:console';
import usersReducers from '../../reducers/usersReducers';

type PushActualSite = ReturnType<typeof pushActualSite>;

const Wrapper = styled.div`
    width: 1000px;
    margin-top: 100px;
`;

const TopIcon = styled.img`
    width: 30px;
    padding-right: 10px;
    padding-left: 20px;
`;

const TopMenu = styled.div`
    display:flex;
    float: right;
`;

const ProfileInformation = styled.div`
    width: 100%;
    
`;

const ProfileImg = styled.img`
    width: 80px;
    border-radius: 50%;
`;

const EditField = styled(Field)`
   display:block;
    color: black;
    font-size:20px;
    
`;
const ProfilePictureDiv= styled.div`
    padding-top:20px;
    width: 300px;
    display:inline-block;
`;
const SeeProfile= styled.p`
    color:blue;
`;

const NameDiv= styled.div`
    display:inline-block;
    margin-right:50px;
`;
interface IProfile{
    user:{
        id?: number;
        name:string;
        jobTitle: string;
        company: string;
        picture:string;
        email: string;
        phone: string;
        city: string;

    }
}





export const Profile: FC<IProfile>=props=>{
     const dispatch = useDispatch();
 useEffect(()=>{
    dispatch<PushActualSite>(pushActualSite({ 
      name: 'Profile',
      icon: '../Media/icons/privacy.svg'
  }))
  },[dispatch]); 

  function getData(){
      if(props.user.name!== undefined)
        return props.user;
  }

const[profileData, setProfileData]= useState(props.user);

const inf={
    expertise: 'blue',
}

const[information, setInformation]= useState(inf);

//const initialValues=data;

    return(
        <Wrapper onLoad={()=>{setProfileData(props.user)}}>
            <TopMenu>
                <TopIcon src='../Media/icons/comments.svg'/>
                <h2>Message</h2>

                <TopIcon src='../Media/icons/contract.svg'/>
                <h2>Create a request</h2>

                <TopIcon src='../Media/icons/book.svg'/>
                <h2>Add to a cluster</h2>

                <TopIcon src='../Media/icons/x.svg'/>
            </TopMenu>
            <ProfileInformation >
                
                <Formik  
                    initialValues={{...profileData }}
                    onSubmit={(values) => {
                        console.log(values);
                       setProfileData(values)
                    }}>
                    {({ isSubmitting }) => (
                            <Form>
                                <ProfilePictureDiv >
                                    <ProfileImg src={props.user.picture}/>
                                    <SeeProfile>See profile</SeeProfile>
                                </ProfilePictureDiv>
                                <NameDiv>
                                    <label htmlFor="name">{profileData.name}</label>
                                    <p>{profileData.company}</p>
                                    <p>{profileData.city}</p> 
                                    <EditField  type="text" name="name" />
                                    <EditField type="text" name="company" />
                                    <EditField type="text" name="city" />
                                </NameDiv>
                                <NameDiv>
                                    <EditField type="email" name="email" />
                                    <EditField type="text" name="phone" />
                                </NameDiv>
                            
                            
                            
                            <button type="submit" >
                                Submit<img src="../Media/icons/plus.svg" alt="" />
                            </button>
                            </Form>
                        )}



                </Formik>


                <Formik  initialValues={{ ...information
                            
                            
                            }}
                            onSubmit={(values) => {
                                console.log(values);
                               setInformation(values)
                    }}>
                         {({ isSubmitting }) => (
                            <Form>
                            <div>
                                Expertise
                                <Field as="select" name="expertise" >
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                                </Field>
                            </div>
                            <div>
                                Specialties
                                <Field as="select" name="sp1">
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                                </Field>
                                <Field as="select" name="sp2">
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                                </Field>
                            </div>
                            <div>
                                Admission to practice law
                                <Field as="select" name="sp1">
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                                </Field>
                                <Field as="select" name="sp2">
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                                </Field>
                            </div>
                            <div>
                                Countries
                                <Field as="select" name="sp1">
                                <option value="red">Tunisia</option>
                                <option value="green">Poland</option>
                                <option value="blue">France</option>
                                <option value="blue">Italy</option>
                                </Field>
                                
                            </div>
                            
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                            </Form>
                        )}
                    
                </Formik>


            </ProfileInformation>
            


        </Wrapper>
    )
}