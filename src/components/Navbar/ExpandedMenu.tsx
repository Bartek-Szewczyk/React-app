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

const Profile = styled.div`
display:flex;
`;
const Name = styled.div`
padding-left: 10px;
font-size: 20px;
`;
const See=styled.div`
font-size:15px;
color:blue;
`;
const TextLink=styled.span`
padding-left: 10px;
`;


export const ExpandedMenu: FC=()=>{
    return(
        <Menu>
            <Section>
                <input className="filter" type="text" placeholder="Filter..."/>
                <NewSection>Platform</NewSection>
                
                    <EditLink to="/publications" ><img src="./Media/icons/publications.png" alt=""/> <TextLink >Publications</TextLink>  </EditLink>
                    <EditLink to="/"> <img src="./Media/icons/house.png" alt=""/><TextLink>Home</TextLink> </EditLink>
                    <EditLink to="/people"> <img src="./Media/icons/people.png" alt=""/><TextLink>People</TextLink> </EditLink>
                    <EditLink to="/entities"><img src="./Media/icons/entities.png" alt=""/><TextLink>Entities</TextLink> </EditLink>
                    <EditLink to="/administration"> <img src="./Media/icons/administration.png" alt=""/> <TextLink>Administration</TextLink></EditLink>
                <NewSection>Workspaces</NewSection>
                    <EditLink to="/contract"> <img src="./Media/icons/cog.png" alt=""/> <TextLink>Client contrac</TextLink>t</EditLink>
                    <div className="newsection"></div>
                <NewSection>Account</NewSection>
                    <Profile>
                        <img className="accontImage" src="./Media/Profile/images.jpg" alt=""/>
                        <Name>
                            Humberta Swift
                            <See>
                                See profile
                            </See>
                        </Name>
                    </Profile>
                    <EditLink to="/privacy" > <img src="./Media/icons/privacy.png" alt=""/> <TextLink>Privacy</TextLink> </EditLink>
                    <EditLink to="/settings" > <img src="./Media/icons/settings.png" alt=""/><TextLink>Settings</TextLink>  </EditLink>
                <div className="newsection"></div>
                <Logout>
                    <img src="./Media/icons/logout.png" alt=""/>
                    <span style={{paddingLeft: "10px"}} >Logout</span>
                </Logout>
            </Section>
        </Menu>
        )
}