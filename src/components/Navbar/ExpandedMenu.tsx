import {FC} from 'React';
import styled from 'styled-components';

const Menu = styled.div`
`;

const Position = styled.div`

`;


export const ExpandedMenu: FC=()=>{
    return(
        <Menu>
            <Position>
                <img src="./Media/icons/network.png" alt=""/>
                Your network
            </Position>
            <Position>
                <img src="./Media/icons/house.png" alt=""/>
                Home
            </Position>
            <Position>
                <img src="./Media/icons/people.png" alt=""/>
                People
            </Position>
            <Position>
                <img src="./Media/icons/administration.png" alt=""/>
                Administration
            </Position>
        </Menu>
        )
}