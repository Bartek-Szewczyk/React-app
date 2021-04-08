import {FC} from 'react';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';

import {Colors} from '../../styledHelpers/Colors';

import './Navbar.css'


import {ExpandedMenu} from './ExpandedMenu';

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
    margin-right: 10px;
`;
const InputWrapper = styled.div`
    
`;

const ExpMenu = styled.div`
 border: 3px solid red;
    width: 200px;
   
`;

const NavMenu = styled.div`
    width: 100%;
    border: 3px solid red;
    text-align: center;
    display: inline-block;
    justify-content: space-between;
`;



export const Navbar: FC =()=>{
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();


    return(
            <InnerWrapper>
                <img className="logo" src="./Media/logo.png" alt=""/>

                <ExpMenu ref={wrapperRef}>
                    <NavMenu onClick={toggleDropdown}>
                        <img src="./Media/icons/house.png" alt=""/>
                        Click Me!
                        <img src="./Media/icons/arrow-down.png" alt=""/>
                    </NavMenu>
                        {dropdownOpen &&
                        <ExpandedMenu/>}
                </ExpMenu>

                <InputWrapper>
                    <input  type="text"/>
                    <img  src="./Media/icons/search.png" alt=""/>
                </InputWrapper>
                <RightIcon>
                    <img className="icon" src="./Media/icons/house.png" alt=""/>
                    <img className="icon" src="./Media/icons/comments.png" alt=""/>
                    <img className="icon" src="./Media/icons/bell.png" alt=""/>
                </RightIcon>
            </InnerWrapper>
        
    )
}