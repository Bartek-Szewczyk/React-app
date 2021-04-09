import React,{FC} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Menu = styled.div`
 border: 1px solid grey;
`;

const Section = styled.div`
background-color: white;
display:block;
`;

const EditLink=styled(Link)`
text-decoration: none;
font-size:20px;
padding-top: 5px;
padding-left: 7px;
color: black;
display: block
`;

const NewSection = styled.p`
padding-left: 5px;
color:gray;
margin:3px
`;

const Logout = styled.div`
text-align: center;
padding: 10px;
color:gray;
`;



export const ExpandedMenu: FC=()=>{
    return(
        <Menu>
            <Section>
                <input className="filter" type="text" placeholder="Filter..."/>
                <NewSection>Platform</NewSection>
                
                    <EditLink to="/publications" ><img src="./Media/icons/publications.png" alt=""/> <span>Publications</span>  </EditLink>
                    <EditLink to="/"> <img src="./Media/icons/house.png" alt=""/> Home</EditLink>
                    <EditLink to="/people"> <img src="./Media/icons/people.png" alt=""/> People</EditLink>
                    <EditLink to="/entities"><img src="./Media/icons/entities.png" alt=""/> <span>Entities</span> </EditLink>
                    <EditLink to="/administration"> <img src="./Media/icons/administration.png" alt=""/> Administration</EditLink>
                <NewSection>Workspaces</NewSection>
                    <EditLink to="/contract"> <img src="./Media/icons/cog.png" alt=""/> Client contract</EditLink>
                    <div className="newsection"></div>
                <NewSection>Account</NewSection>
                    <EditLink to="/privacy" > <img src="./Media/icons/privacy.png" alt=""/> Privacy</EditLink>
                    <EditLink to="/settings" > <img src="./Media/icons/settings.png" alt=""/> Settings </EditLink>
                <div className="newsection"></div>
                <Logout>
                    <img src="./Media/icons/logout.png" alt=""/>
                    <span style={{paddingLeft: "10px"}} >Logout</span>
                </Logout>
            </Section>
        </Menu>
        )
}