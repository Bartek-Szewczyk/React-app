import React, {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import { ErrorMessage, Field, Form, Formik} from 'formik';
import { useDispatch, useSelector} from 'react-redux';
import { pushActualSite } from '../../actions/actualSiteAction';
import './Profile.css'
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { ISingleUser } from '../../entities/users';
import { IPhotoReducer } from '../../reducers/photoReducers';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Colors } from '../../styledHelpers/Colors';

type PushActualSite = ReturnType<typeof pushActualSite>;

const Wrapper = styled.div`
    width: 1000px;
    margin-top: 100px;
    display:block;
    margin-bottom:100px;
`;

const TopIcon = styled.img`
    width: 25px;
    padding-right: 10px;
    padding-left: 20px;
`;

const TopMenu = styled.div`
    display:flex;
    padding-left:400px;
    color:${Colors.darkBlue}
`;

const ProfileInformation = styled.div`
    width: 100%;
    
`;

const ProfileImg = styled.img`
    width: 100px;
    border-radius: 50%;
`;
const ProfileDoubleImg= styled.img`
    width:20px;
    position absolute;
    border-radius:50%;
    border:4px solid white;
    margin-top: 75px;
    margin-left:-35px;
    background-color:white;
`;

const EditField = styled(Field)`
    display:block;
    color: black;
    font-size:20px;
    margin-bottom: 10px;
`;
const ProfilePictureDiv= styled.div`
    padding-top:20px;
    width: 300px;
    display:inline-block;
`;
const SeeProfile= styled.p`
    color:#4693a7;
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
    border:none;
    float:right;
    font-size: 16px;
    color: #6eaaba;
    background-color: #e6f0f3;
    padding: 5px;
    border-radius: 5px;
`;

const EditIcon=styled.img`
    float: right;
    width:30px;
`;
const EditButton= styled.button`
    border:none;
    background:none;
    margin-bottom:120px;
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

const TableRow = styled.tr`
    width:100%;
    justify-content: space-between;
    display: flex;
    font-size:20px;
    color: #2a3a6b;
`;
const TableTitle = styled.th`
    width:200px;
    padding-top:30px;
`;

const TableContent = styled.td`
    width:200px;
`;

const TableLine = styled.div`
    width:1000px;
    height:2px;
    background-color: grey;
    margin-top:10px;
    margin-bottom:10px;
    `;

const MoreProposals= styled.label`
    float: right;
    color: #4693a7;
    font-size: 22px;
`;
const LongField = styled(Field)`
    width: 500px;
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
    id?:number;
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


    const [startDate1, setStartDate1] = useState(new Date())
    const [startDate2, setStartDate2] = useState(new Date(2021, 3, 14))
    const [startDate3, setStartDate3] = useState(new Date(2017, 8, 30))
    const [startDate4, setStartDate4] = useState(new Date(2020, 6, 4))
    const [startDate5, setStartDate5] = useState(new Date(2019, 1, 18))
    const [startDate6, setStartDate6] = useState(new Date(2018, 0, 20))

console.log(props.id)

    const[profileData, setProfileData]= useState(props.user);
    const inf={
        expertise: 'Mergers and acquisition',
        sp1: 'Cross border operation',
        sp2: 'Transaction over 500M Є/$',
        ad1: 'Paris bar operation',
        ad2: 'Tunisian bar association',
        countries: 'Tunisia',
        hourly: '610Є/hour Negotiated',
        term: 'Monthly 10kЄ retainer - see with Jeanny Smith',
        services: 'Corporate M&A and international acquisition',
        user1: 2,
        user2: 3,
        nameP1: 'Operation Titan',
        nameP2: 'Op. Prometheus',
        nameP3: 'Op. Latandre',
        entityP1: 'Renault Cosmos',
        entityP2: 'Renault HQ',
        entityP3: 'Renault Brabus',
        locationP1: 'France',
        locationP2: 'USA',
        locationP3: 'Italy',
        expertiseP1: '#Tax',
        expertiseP2: '#M&A',
        expertiseP3: '#Social',
        firmP1: "Racine",
        firmP2: "Clifford chance",
        firmP3: "SVZ",
        nameP11: 'Op. Prometheus',
        nameP22: 'Op. Latandre',
        nameP33: 'Operation Titan',
        entityP11: 'Renault HQ',
        entityP22: 'Renault Cosmos',
        entityP33: 'Renault Brabus',
        locationP11: 'France',
        locationP22: 'Poland',
        locationP33: 'USA',
        expertiseP11: '#Social',
        expertiseP22: '#M&A',
        expertiseP33: '#Tax',
        year1: '2019',
        year2: '2018',
        year3: '2017',
        year4: '',
        year5: '',
        cost1: 'CS 153',
        cost2: 'CS 153',
        cost3: 'CS 47',
        cost4: 'CS 153',
        cost5: 'CS 32',
        total1: '3 500Є',
        total2: '9 500Є',
        total3: '10 500Є',
        total4: '18 500Є',
        total5: '15 500Є',
        law1: 'Clifford chance',
        law2: 'Linklaters',
        law3: 'Linklaters',
        law4: 'Linklaters',
        law5: 'Linklaters',
        date1: new Date(),
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
                <h3>Message</h3>

                <TopIcon src='../Media/icons/contract.svg'/>
                <h3>Create a request</h3>

                <TopIcon src='../Media/icons/book.svg'/>
                <h3>Add to a cluster</h3>

                <TopIcon src='../Media/icons/x.svg'/>
            </TopMenu>
            
            <ProfileInformation >
                
                      

                <Formik  
                    initialValues={{...profileData }}
                    onSubmit={(values) => {
                        console.log(values);
                        if(values.name==="")values.name=profileData.name;
                        if(values.company==="")values.company=profileData.company;
                        if(values.city==="")values.city=profileData.city;
                        if(values.email==="")values.email=profileData.email;
                        if(values.phone==="")values.phone=profileData.phone;
                       edit();
                       setProfileData(values);
                    }}>
                    {() => (
                        
                            <EditFormName>
                                
                               
                                <div>
                                    <ProfilePictureDiv >
                                        <ProfileImg src={props.user.picture}/>
                                        <ProfileDoubleImg src='../Media/logo.png'/>
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
                                        <EditField type="text" name="city"  />
                                    </NameDiv>
                                </div>
                                <NameDiv className="nameDiv">
                                    <ProfileNormal>{profileData.email}</ProfileNormal>
                                    <ProfileNormal>{profileData.phone}</ProfileNormal> 
                                </NameDiv>
                                <NameDiv className="nameDiv noVisible">
                                    <EditField type="email" name="email"/>
                                    <ErrorMessage name="email" />
                                    <EditField type="text" name="phone"/>
                                </NameDiv>
                            
                            <EditButton className="nameDiv" type="submit" onClick={()=>{edit()}}>
                                     <EditIcon   src="../Media/icons/edit.svg" alt="" onClick={()=>{edit()}}/>
                            </EditButton>
                            
                            <Submit type="submit" className="nameDiv noVisible" >
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
                <SelectLabel className="selectForm selectLabel">{information.countries}</SelectLabel>
                <Field className="selectForm fieldSelect noVisible" as="select" name="countries">
                    <option value="Tunisia">Tunisia</option>
                    <option value="Poland">Poland</option>
                    <option value="France">France</option>
                    <option value="Italy">Italy</option>
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
                <LongField type="text" name="term" className="selectForm noVisible"/>
                <br />
                <Field type="file" className="file" name="file" />
{console.log(document.querySelector('.file'))}
                <SelectTitle>Services & projects</SelectTitle>
                <label className="selectForm labelText">{information.services}</label>
                <LongField type="text" name="services" className="selectForm noVisible"/>

                <SelectTitle>International correspondents</SelectTitle>
                <SmallProfile>
                    <Field className="selectForm fieldSelect noVisible" as="select" name="user1">
                        {users()}
                    </Field>
                    <SmallProfileImg className="selectForm"  src={User1.picture}/>
                    <SmallProfileName className="selectForm" >{User1.name}</SmallProfileName>
                    <SmallMessageIcon src="../Media/icons/comments.svg"/>
                    <SmallMessageLabel>Message</SmallMessageLabel>
                    <SmallProfileIcon src="../Media/icons/people.svg"/>
                    <SmallProfileLabel>Profile</SmallProfileLabel>
                </SmallProfile>
                <SmallProfile>
                    <Field className="selectForm fieldSelect noVisible" as="select" name="user2">
                        {users()}
                    </Field>
                    <SmallProfileImg className="selectForm" src={User2.picture}/>
                    <SmallProfileName className="selectForm" >{User2.name}</SmallProfileName>
                    <SmallMessageIcon src="../Media/icons/comments.svg"/>
                    <SmallMessageLabel>Message</SmallMessageLabel>
                    <SmallProfileIcon src="../Media/icons/people.svg"/>
                    <SmallProfileLabel>Profile</SmallProfileLabel>
                </SmallProfile>
            </div>        
            <Line/>
            <div>
            <BoldTitle>Proposals</BoldTitle>

            <TableRow>
                <TableTitle>Name</TableTitle>
                <TableTitle>Entity</TableTitle>
                <TableTitle>Location</TableTitle>
                <TableTitle>Expertise</TableTitle>
                <TableTitle>Date</TableTitle>
                <TableTitle>Firm</TableTitle>
            </TableRow>
            <TableLine/>
            <TableRow>
                <TableContent>
                    <p className="selectForm">{information.nameP1}</p>
                    <Field type="text" name="nameP1" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.entityP1}</p>
                     <Field type="text" name="entityP1" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.locationP1}</p>
                    <Field className="selectForm tableLocation noVisible" as="select" name="locationP1">
                        <option value="Tunisia">USA</option>
                        <option value="Poland">Poland</option>
                        <option value="France">France</option>
                        <option value="Italy">Italy</option>
                    </Field>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.expertiseP1}</p>
                    <Field type="text" name="expertiseP1" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{startDate6.toLocaleDateString()}</p>
                    <div className="selectForm noVisible">
                        <DatePicker className="date " selected={startDate6} onChange={(date) => setStartDate6(date as Date)} />
                    </div>                
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.firmP1}</p>
                    <Field type="text" name="firmP1" className="selectForm tableField noVisible"/>
                </TableContent>
            </TableRow>
            <TableRow>
                <TableContent>
                    <p className="selectForm">{information.nameP2}</p>
                    <Field type="text" name="nameP2" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.entityP2}</p>
                     <Field type="text" name="entityP2" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.locationP2}</p>
                    <Field className="selectForm tableLocation noVisible" as="select" name="locationP2">
                        <option value="Tunisia">USA</option>
                        <option value="Poland">Poland</option>
                        <option value="France">France</option>
                        <option value="Italy">Italy</option>
                    </Field>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.expertiseP2}</p>
                    <Field type="text" name="expertiseP2" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{startDate5.toLocaleDateString()}</p>
                    <div className="selectForm noVisible">
                        <DatePicker className="date " selected={startDate5} onChange={(date) => setStartDate5(date as Date)} />
                    </div>                
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.firmP2}</p>
                    <Field type="text" name="firmP2" className="selectForm tableField noVisible"/>
                </TableContent>
            </TableRow>
            <TableRow>
                <TableContent>
                    <p className="selectForm">{information.nameP3}</p>
                    <Field type="text" name="nameP3" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.entityP3}</p>
                     <Field type="text" name="entityP3" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.locationP3}</p>
                    <Field className="selectForm tableLocation noVisible" as="select" name="locationP3">
                        <option value="Tunisia">USA</option>
                        <option value="Poland">Poland</option>
                        <option value="France">France</option>
                        <option value="Italy">Italy</option>
                    </Field>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.expertiseP3}</p>
                    <Field type="text" name="expertiseP3" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{startDate4.toLocaleDateString()}</p>
                    <div className="selectForm noVisible">
                        <DatePicker className="date " selected={startDate4} onChange={(date) => setStartDate4(date as Date)} />
                    </div>                
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.firmP3}</p>
                    <Field type="text" name="firmP3" className="selectForm tableField noVisible"/>
                </TableContent>
            </TableRow>
            <MoreProposals>See more proposals</MoreProposals>
            <Line/>
            <BoldTitle>Internal Reviews</BoldTitle>
            <TableRow>
                <TableTitle>Name</TableTitle>
                <TableTitle>Entity</TableTitle>
                <TableTitle>Location</TableTitle>
                <TableTitle>Expertise</TableTitle>
                <TableTitle>Date</TableTitle>
                
            </TableRow>
            <TableLine/>
            <TableRow>
                <TableContent>
                    <p className="selectForm">{information.nameP11}</p>
                    <Field type="text" name="nameP11" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.entityP11}</p>
                     <Field type="text" name="entityP11" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.locationP11}</p>
                    <Field className="selectForm tableLocation noVisible" as="select" name="locationP11">
                        <option value="Tunisia">USA</option>
                        <option value="Poland">Poland</option>
                        <option value="France">France</option>
                        <option value="Italy">Italy</option>
                    </Field>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.expertiseP11}</p>
                    <Field type="text" name="expertiseP11" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{startDate3.toLocaleDateString()}</p>
                    <div className="selectForm noVisible">
                        <DatePicker className="date " selected={startDate3} onChange={(date) => setStartDate3(date as Date)} />
                    </div>                
                </TableContent>
            </TableRow>
            <TableRow>
                <TableContent>
                    <p className="selectForm">{information.nameP22}</p>
                    <Field type="text" name="nameP22" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.entityP22}</p>
                     <Field type="text" name="entityP22" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.locationP22}</p>
                    <Field className="selectForm tableLocation noVisible" as="select" name="locationP22">
                        <option value="Tunisia">USA</option>
                        <option value="Poland">Poland</option>
                        <option value="France">France</option>
                        <option value="Italy">Italy</option>
                    </Field>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.expertiseP22}</p>
                    <Field type="text" name="expertiseP22" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{startDate2.toLocaleDateString()}</p>
                    <div className="selectForm noVisible">
                        <DatePicker className="date " selected={startDate2} onChange={(date) => setStartDate2(date as Date)} />
                    </div>                    
                </TableContent>

            </TableRow>
            <TableRow>
                <TableContent>
                    <p className="selectForm">{information.nameP33}</p>
                    <Field type="text" name="nameP33" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.entityP33}</p>
                     <Field type="text" name="entityP33" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.locationP33}</p>
                    <Field className="selectForm tableLocation noVisible" as="select" name="locationP33">
                        <option value="Tunisia">USA</option>
                        <option value="Poland">Poland</option>
                        <option value="France">France</option>
                        <option value="Italy">Italy</option>
                    </Field>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.expertiseP33}</p>
                    <Field type="text" name="expertiseP33" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{startDate1.toLocaleDateString()}</p>
                    <div className="selectForm noVisible">
                        <DatePicker className="date " selected={startDate1} onChange={(date) => setStartDate1(date as Date)} />
                    </div>
                </TableContent>
            </TableRow>
            <BoldTitle>See more Reviews</BoldTitle>
            <Line/>
            <BoldTitle>Amount of fees</BoldTitle>
            <TableRow>
                <TableTitle>Year</TableTitle>
                <TableTitle>Cost center</TableTitle>
                <TableTitle>Total amount</TableTitle>
                <TableTitle>Law firm</TableTitle>
            </TableRow>
            <TableLine/>
            <TableRow>
                <TableContent>
                    <p className="selectForm">{information.year1}</p>
                    <Field type="text" name="year1" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.cost1}</p>
                     <Field type="text" name="cost1" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.total1}</p>
                    <Field type="text" name="total1" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.law1}</p>
                    <Field type="text" name="law1" className="selectForm tableField noVisible"/>
                </TableContent>
            </TableRow>
            <TableRow>
                <TableContent>
                    <p className="selectForm">{information.year2}</p>
                    <Field type="text" name="year2" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.cost2}</p>
                     <Field type="text" name="cost2" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.total2}</p>
                    <Field type="text" name="total2" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.law2}</p>
                    <Field type="text" name="law2" className="selectForm tableField noVisible"/>
                </TableContent>
                </TableRow>
            <TableRow>
                <TableContent>
                    <p className="selectForm">{information.year3}</p>
                    <Field type="text" name="year3" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.cost3}</p>
                     <Field type="text" name="cost3" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.total3}</p>
                    <Field type="text" name="total3" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.law3}</p>
                    <Field type="text" name="law3" className="selectForm tableField noVisible"/>
                </TableContent>
            </TableRow>
            <TableRow>
                <TableContent>
                    <p className="selectForm">{information.year4}</p>
                    <Field type="text" name="year4" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.cost4}</p>
                     <Field type="text" name="cost4" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.total4}</p>
                    <Field type="text" name="total4" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.law4}</p>
                    <Field type="text" name="law4" className="selectForm tableField noVisible"/>
                </TableContent>
            </TableRow>
            <TableRow>
                <TableContent>
                    <p className="selectForm">{information.year5}</p>
                    <Field type="text" name="year5" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.cost5}</p>
                     <Field type="text" name="cost5" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.total5}</p>
                    <Field type="text" name="total5" className="selectForm tableField noVisible"/>
                </TableContent>
                <TableContent>
                    <p className="selectForm">{information.law5}</p>
                    <Field type="text" name="law5" className="selectForm tableField noVisible"/>
                </TableContent>
            </TableRow>



            </div>    
                
                </EditFormAll>
        )}
                    
            </Formik>


            </ProfileInformation>
            


        </Wrapper>
    )
}