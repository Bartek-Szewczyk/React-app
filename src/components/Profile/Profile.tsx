import React, {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import { Field, Form, Formik} from 'formik';
import { useDispatch, useSelector} from 'react-redux';
import { pushActualSite } from '../../actions/actualSiteAction';
import './Profile.css'
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { ISingleUser } from '../../entities/users';
import { IPhotoReducer } from '../../reducers/photoReducers';

type PushActualSite = ReturnType<typeof pushActualSite>;

const Wrapper = styled.div`
    width: 1000px;
    margin-top: 100px;
    display:block;
`;

const TopIcon = styled.img`
    width: 30px;
    padding-right: 10px;
    padding-left: 20px;
`;

const TopMenu = styled.div`
    display:flex;
    padding-left:260px;
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
   
`;

const ProfileBold = styled.p`
    font-size: 20px;
    font-weight: bold;
`;
const ProfileNormal= styled.p`
    font-size: 20px;
`;

const Submit = styled.button`
    position: relative;
    font-size: 15px;
    float:right;
`;

const EditIcon=styled.img`
    float: right;
    width:30px;
`;

const EditFormName= styled(Form)`
    display:flex;
    justify-content: space-between;
    align-items: flex-end;
`;
const Line =styled.div`
    width:1000px;
    height:2px;
    background-color: grey;
    margin-top:30px;
    margin-bottom:20px;
`;
const SelectLabel= styled.label`
   
`;

const SelectTitle= styled.p`
    font-size: 20px;
    color: grey;
`;

const EditFormAll= styled(Form)`
    text-align: left;
`;
const BoldTitle= styled.p`
    font-size: 20px;
    color: #2a3a6b;
    font-weight: bold;
`;
const SmallProfile= styled.div`
    width: 100%;
    height: 50px;
    background-color: #e6f0f3;
    border-radius: 5px;
    margin-bottom: 10px;
    display:flex;
    align-items: center;
`;

const SmallProfileImg= styled.img`
    width: 40px;
    border-radius: 50%;
    padding: 5px;
`;

const SmallProfileName = styled.label`
    font-size: 20px;
    color: #2a3a6b;
    padding-left: 10px;
    width:40%;
`;

const SmallMessageIcon= styled.img`

`;
const SmallMessageLabel = styled.label`
    font-size: 20px;
    color: #2a3a6b;
    padding-left:10px;
`;
const SmallProfileIcon= styled.img`
    padding-left:40px;
`;
const SmallProfileLabel = styled.label`
    font-size: 20px;
    color: #2a3a6b;
    padding-left:10px;
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

  const { usersList }= useSelector<IState, IUsersReducer>(globalState => ({
    ...globalState.users,
  }))

   const { photoList }= useSelector<IState, IPhotoReducer>(globalState => ({
    ...globalState.photos
  }))



    const[profileData, setProfileData]= useState(props.user);

    const inf={
        expertise: 'Mergers and acquisition',
        sp1: 'Cross border operation',
        sp2: 'Transaction over 500M Є/$',
        ad1: 'Paris bar operation',
        ad2: 'Tunisian bar association',
        counties: 'Tunisia',
        hourly: '610Є/hour Negotiated',
        term: 'Monthly 10kЄ retainer - see with Jeanny Smith',
        services: 'Corporate M&A and international acquisition',
        user1: 2,
        user2: 3,
    }

    const[information, setInformation]= useState(inf);

    function getUserPhoto(user : ISingleUser) {
    for (let i = 0; i < photoList.length; i++) {
        const e = photoList[i];
        if(e.id===user.id){
            return e.url
        }
    }
    return "No photo";
    }




  const NewUser1= usersList[information.user1-1];
  const NewUser2= usersList[information.user2-1];
  

    const User1= {
        name: NewUser1?.name,
        picture: photoList? getUserPhoto(NewUser1) :"../..//img/user.jpg",
}
    const  User2= {
        name: NewUser2?.name,
        picture: photoList? getUserPhoto(NewUser2) :"../..//img/user.jpg",
        
}




function edit(){
    let nameDiv = document.querySelectorAll('.nameDiv');
    nameDiv.forEach(e =>{
        e.classList.toggle('noVisible')
    })
}
function editSelect(){
    let selectForm = document.querySelectorAll('.selectForm');
    selectForm.forEach(e =>{
        e.classList.toggle('noVisible')
    })
}
function users(){
    let all=[];
    for (let i = 0; i < usersList.length; i++) {
        const user = usersList[i];
        all.push(<option value={user.id}>{user.name}</option>)
    }
    return all;
}

    return(
        <Wrapper onLoad={()=>{setProfileData(props.user);}} >
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
                <EditIcon className="nameDiv" src="../Media/icons/edit.svg" alt="" onClick={()=>{edit()}} />
                       

                <Formik  
                    initialValues={{...profileData }}
                    onSubmit={(values) => {
                        console.log(values);
                       setProfileData(values)
                    }}>
                    {({ isSubmitting }) => (
                        
                            <EditFormName>
                                <div>
                                    <ProfilePictureDiv >
                                        <ProfileImg src={props.user.picture}/>
                                        <SeeProfile>See profile</SeeProfile>
                                    </ProfilePictureDiv>
                                    <NameDiv className="nameDiv">
                                        <ProfileBold>{profileData.name}</ProfileBold>
                                        <ProfileBold>{profileData.company}</ProfileBold>
                                        <ProfileNormal>{profileData.city}</ProfileNormal> 
                                    </NameDiv>
                                    <NameDiv className="nameDiv noVisible">
                                    
                                        <EditField type="text" name="name" />
                                        <EditField type="text" name="company" />
                                        <EditField type="text" name="city" />
                                    </NameDiv>
                                </div>
                                <NameDiv className="nameDiv">
                                    <ProfileNormal>{profileData.email}</ProfileNormal>
                                    <ProfileNormal>{profileData.phone}</ProfileNormal> 
                                </NameDiv>
                                <NameDiv className="nameDiv noVisible">
                                    <EditField type="email" name="email" />
                                    <EditField type="text" name="phone" />
                                </NameDiv>
                            
                            
                            
                            <Submit type="submit" className="nameDiv noVisible" onClick={()=>{edit()}} >
                                Zapisz
                            </Submit>
                            </EditFormName>
                        )}



                </Formik>

<Line/>
<EditIcon className="selectForm" src="../Media/icons/edit.svg" alt="" onClick={()=>{editSelect()}} />
    <Formik  initialValues={{ ...information
                            
            
            }}
            onSubmit={(values) => {
                console.log(values);
               setInformation(values)
    }}>
         {({ isSubmitting }) => (
            <EditFormAll>
                <Submit type="submit" className="selectForm noVisible" onClick={()=>{editSelect()}} >
                    Zapisz
                </Submit>
            <div>
                <SelectTitle>Expertise</SelectTitle>
                <SelectLabel className="selectForm selectLabel">{information.expertise}</SelectLabel>
                <Field className="selectForm fieldSelect noVisible" as="select" name="expertise" >
                    <option value="Mergers and acquisition">Mergers and acquisition</option>
                    <option value="Paris bar operation">Paris bar operation</option>
                    <option value="Tunisian bar association">Tunisian bar association</option>
                </Field>
            </div>
            <div>
                <SelectTitle>Specialties</SelectTitle>
                <SelectLabel className="selectForm selectLabel">{information.sp1}</SelectLabel>
                <SelectLabel className="selectForm selectLabel">{information.sp2}</SelectLabel>
                <Field className="selectForm fieldSelect noVisible" as="select" name="sp1">
                    <option value="Cross border operation">Cross border operation</option>
                    <option value="Paris bar operation">Paris bar operation</option>
                    <option value="Tunisian bar association">Tunisian bar association</option>
                </Field>
                <Field className="selectForm fieldSelect noVisible" as="select" name="sp2">
                    <option value="Transaction over 500M Є/$">Transaction over 500M Є/$</option>
                    <option value="Paris bar operation">Paris bar operation</option>
                    <option value="Tunisian bar association">Tunisian bar association</option>
                </Field>
            </div>
            <div>
                <SelectTitle>Admission to practice law</SelectTitle>
                <SelectLabel className="selectForm selectLabel">{information.ad1}</SelectLabel>
                <SelectLabel className="selectForm selectLabel">{information.ad2}</SelectLabel>
                <Field className="selectForm fieldSelect noVisible" as="select" name="ad1">
                    <option value="Paris bar operation">Paris bar operation</option>
                    <option value="Tunisian bar association">Tunisian bar association</option>
                    <option value="Cross border operation">Cross border operation</option>
                </Field>
                <Field className="selectForm fieldSelect noVisible" as="select" name="ad2">
                    <option value="Paris bar operation">Paris bar operation</option>
                    <option value="Tunisian bar association">Tunisian bar association</option>
                    <option value="Cross border operation">Cross border operation</option>
                </Field>
            </div>
            <div>
                <SelectTitle>Countries</SelectTitle>
                <SelectLabel className="selectForm selectLabel">{information.counties}</SelectLabel>
                <Field className="selectForm fieldSelect noVisible" as="select" name="countries">
                    <option value="red">Tunisia</option>
                    <option value="green">Poland</option>
                    <option value="blue">France</option>
                    <option value="blue">Italy</option>
                </Field>
            </div>
            <Line/>
            <div>
                <BoldTitle> Panel Information</BoldTitle>

                <SelectTitle>Hourly fee</SelectTitle>
                <label className="selectForm labelText">{information.hourly}</label>
                <Field type="text" name="hourly" className="selectForm noVisible"/>

                <SelectTitle>Term & conditions</SelectTitle>
                <label className="selectForm labelText">{information.term}</label>
                <Field type="text" name="term" className="selectForm noVisible"/>
                <br />
                <Field type="file" className="file" name="file"/>

                <SelectTitle>Services & projects</SelectTitle>
                <label className="selectForm labelText">{information.services}</label>
                <Field type="text" name="services" className="selectForm noVisible"/>

                <SelectTitle>International correspondents</SelectTitle>
                <SmallProfile>
                    <Field className="selectForm fieldSelect noVisible" as="select" name="user1">
                        {users()}
                    </Field>
                    <SmallProfileImg src={User1.picture}/>
                    <SmallProfileName>{User1.name}</SmallProfileName>
                    <SmallMessageIcon src="../Media/icons/comments.svg"/>
                    <SmallMessageLabel>Message</SmallMessageLabel>
                    <SmallProfileIcon src="../Media/icons/people.svg"/>
                    <SmallProfileLabel>Profile</SmallProfileLabel>
                </SmallProfile>
                <SmallProfile>
                    <Field className="selectForm fieldSelect noVisible" as="select" name="user2">
                        {users()}
                    </Field>
                    <SmallProfileImg src={User2.picture}/>
                    <SmallProfileName>{User2.name}</SmallProfileName>
                    <SmallMessageIcon src="../Media/icons/comments.svg"/>
                    <SmallMessageLabel>Message</SmallMessageLabel>
                    <SmallProfileIcon src="../Media/icons/people.svg"/>
                    <SmallProfileLabel>Profile</SmallProfileLabel>
                </SmallProfile>
            </div>        
            <Line/>
            <div>
            <BoldTitle>Proposals</BoldTitle>
            </div>    
                
                </EditFormAll>
        )}
                    
            </Formik>


            </ProfileInformation>
            


        </Wrapper>
    )
}