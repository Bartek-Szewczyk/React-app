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
    height:300px;
    background: ${Colors.white};
    margin-top: 20px;
    box-shadow: 0 0 1em grey;
    margin-left: 20px;
    align-items: center;
    justify-content: center;
`;

const LeftIcon =styled.div`
    position: relative;
    margin-top: 20px;
    margin-left:20px;
    padding: 5px;
`;


const YourWrapper = styled.div`
padding: 10px;
`;

export const LeftMenu: FC =()=>{
    return(
            <InnerWrapper>
                <ProfileWrapper>
                    <img className="prof" src="./Media/logo.png" alt=""/>
                    <div>Name</div>
                    <div>Job title</div>
                    <div className="pauza"></div>
                    <YourWrapper>
                        <img className="iconLink" src="./Media/icons/network.png" alt=""/>
                        <a className="textLink" href="">Your network</a>
                        <img className="borderIcon" src="./Media/icons/user-plus.png" alt=""/>
                    </YourWrapper>
                    <YourWrapper>
                        <img className="iconLink" src="./media/icons/publications.png" alt=""/>
                        <a className="textLink" href="">Your Publications</a>
                        <img className="borderIcon" src="./Media/icons/plus.png" alt=""/>
                    </YourWrapper>
               
                </ProfileWrapper>
                <LeftIcon>
                    <YourWrapper>
                        <img className="iconLink" src="./Media/icons/publications.png" alt=""/>
                        <Link to="/publications" className="textLink">Publications</Link>
                    </YourWrapper>
                    <YourWrapper>
                        <img className="iconLink" src="./Media/icons/ecosystem.png" alt=""/>
                        <Link to="/ecosystem" className="textLink">Ecosystem</Link>
                    </YourWrapper>
                    
                    <YourWrapper>
                        <img className="iconLink" src="./Media/icons/entities.png" alt=""/>
                        <Link to="/entities" className="textLink">Entities</Link>
                    </YourWrapper>
                    
                </LeftIcon>
            </InnerWrapper>
    )
}