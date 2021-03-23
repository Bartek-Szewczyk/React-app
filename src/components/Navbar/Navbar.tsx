import {FC} from 'React';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';

import './Navbar.css'

//import {ExpandedMenu} from "./ExpandedMenu";

const InnerWrapper = styled.div`
    width: 100%;
    height: 50px;
    padding: 5px;
    display: inline-flex;
    justify-content: space-between;
    background: ${Colors.white};
    box-shadow: 0px 5px 5px grey;
`;
const RightIcon = styled.div`
    padding: 5px
`;
const InputWrapper = styled.div`
    
`;



export const Navbar: FC =()=>{
    return(
            <InnerWrapper>
                <img className="logo" src="./Media/logo.png" alt=""/>
                
                <InputWrapper>
                    <input  type="text"/>
                    <img  src="./Media/icons/search.png" alt=""/>
                </InputWrapper>
                <RightIcon>
                    <img src="./Media/icons/house.png" alt=""/>
                    <img src="./Media/icons/comments.png" alt=""/>
                    <img src="./Media/icons/bell.png" alt=""/>
                </RightIcon>
            </InnerWrapper>
        
    )
}