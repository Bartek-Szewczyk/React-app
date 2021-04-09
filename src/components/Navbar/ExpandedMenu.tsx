import React,{FC} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Menu = styled.div`
 border: 3px solid red;
`;

const Position = styled.div`

`;
const Section = styled.div`

`;

export const ExpandedMenu: FC=()=>{
    return(
        <Menu>
            <Section>
                <p>Platform</p>
                <Position>
                    <img src="./Media/icons/publications.png" alt=""/>
                    <Link to="/publications">Publications</Link>
                </Position>
                <Position>
                    <img src="./Media/icons/house.png" alt=""/>
                     <Link to="/">Home</Link>
                </Position>
                <Position>
                    <img src="./Media/icons/people.png" alt=""/>
                    <Link to="/people">People</Link>
                </Position>
                <Position>
                    <img src="./Media/icons/entities.png" alt=""/>
                    <Link to="/entities">Entities</Link>
                </Position>
                <Position>
                    <img src="./Media/icons/administration.png" alt=""/>
                     <Link to="/administration">Administration</Link>
                </Position>
                <p>Workspaces</p>
                <Position>
                    <img src="./Media/icons/cog.png" alt=""/>
                    <Link to="/contract">Client contract</Link>
                </Position>
            </Section>
        </Menu>
        )
}