import {FC} from 'react';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';
import {Link} from "react-router-dom";

import './LeftMenu.css'

const InnerWrapper = styled.div`
    
`;

const ProfileWrapper =styled.div`
    width: 280px;
    height:280px;
    background: ${Colors.white};
    margin-top: 20px;
    box-shadow: 0 0 1em grey;
    margin-left: 20px;
    align-items: center;
    
`;

const Profile=styled.div`
    text-align:center;
    padding:15px;
`;


const LeftIcon =styled.div`
    width: 280px;
    height:300px;
    position: relative;
    margin-top: 20px;
    margin-left:20px;
    padding: 5px;
    display: block;
`;
const EditLink=styled(Link)`
    text-decoration: none;
    font-size:20px;
    padding-top: 5px;
    padding-left: 7px;
    color: black;
    display: block;
`;

const YourWrapper = styled.div`
    width:260px;
    padding: 10px;
    justify-content:space-between;
    display:inline-flex;
`;
const Name=styled.div`
    color:blue;
    font-size:20px;
`;

const JobTitle=styled.div`
    color: gray;
`;

export const LeftMenu: FC =()=>{
    return(
            <InnerWrapper>
                <ProfileWrapper>
                    <Profile>
                        <img className="prof" src="./Media/Profile/images.jpg" alt=""/>
                        <Name>Humberta Swift</Name>
                        <JobTitle>Job title - Company</JobTitle>
                    </Profile>
                    <div className="pauza"></div>
                    <YourWrapper>
                        <EditLink to="/">
                            <img className="iconLink" src="./Media/icons/network.png" alt=""/>
                            <span className="textLink">Your network</span>
                        </EditLink>
                        <div><img className="borderIcon" src="./Media/icons/user-plus.png" alt=""/></div>
                    </YourWrapper>
                    <YourWrapper>
                        <EditLink to="/">
                            <img className="iconLink" src="./Media/icons/publications.png" alt=""/>
                            <span className="textLink">Your Publications</span>
                        </EditLink>
                        <div><img className="borderIcon" src="./Media/icons/plus.png" alt=""/></div>
                        
                    </YourWrapper>
               
                </ProfileWrapper>
                <LeftIcon>
                    <YourWrapper>
                        <EditLink to="/publications">
                            <img className="iconLink" src="./Media/icons/publications.png" alt=""/>
                            <span className="textLink">Publications</span>
                        </EditLink>
                       
                    </YourWrapper>
                    <YourWrapper>
                        <EditLink to="/ecosystem">
                            <img className="iconLink" src="./Media/icons/ecosystem.png" alt=""/>
                            <span className="textLink">Ecosystem</span>
                        </EditLink>
                        
                    </YourWrapper>
                    
                    <YourWrapper>
                        <EditLink to="/entities">
                            <img className="iconLink" src="./Media/icons/entities.png" alt=""/>
                            <span className="textLink">Entities</span>
                        </EditLink>
                    </YourWrapper>
                    
                </LeftIcon>
            </InnerWrapper>
    )
}