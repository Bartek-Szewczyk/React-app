import {FC} from 'react';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';

import {Colors} from '../../styledHelpers/Colors';

import './Navbar.css'


import {ExpandedMenu} from './ExpandedMenu';
import { Link } from 'react-router-dom';

const InnerWrapper = styled.div`
    width: 100%;
    height: 50px;
    padding: 5px;
    display: inline-flex;
    
    background: ${Colors.white};
    box-shadow: 0px 5px 5px grey;
`;
const RightIcon = styled.div`
    margin-right: 10px;
    display: inline-block;
    right: 20px;
    position:absolute;
`;
const InputWrapper = styled.div`
    width:30%;
    display: inline-block;
    position:absolute;
    left:35%;
`;

const ExpMenu = styled.div`
    width: 200px;
    position: absolute;
    left:10%;
    padding-top:5px
`;

const NavMenu = styled.div`
    width:100%;
    display: inline-flex;
    font-size: 20px;
    justify-content: space-between;
    
`;





export const Navbar: FC=()=>{
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();


    return(
            <InnerWrapper>
                <img className="logo" src="./Media/logo.png" alt=""/>

                <ExpMenu ref={wrapperRef}>
                    <NavMenu onClick={toggleDropdown}>
                        <div>
                            <img  src="./Media/icons/house.png" alt=""/>
                            Home
                        </div>
                        
                       
                        <div> <img src="./Media/icons/arrow-down.png" alt=""/></div>
                       
                    </NavMenu>
                        {dropdownOpen &&
                        <ExpandedMenu />}
                </ExpMenu>

                <InputWrapper>
                    <input className="search" type="text" placeholder="Search Legalcluster"/>
                    <img className="searchIcon" src="./Media/icons/search.png" alt=""/>
                </InputWrapper>
                <RightIcon>
                    <img className="icon" src="./Media/icons/house.png" alt=""/>
                    <div className="iconShadow">
                       <div className="iconNumber">5</div>
                         <img className="icon" src="./Media/icons/comments.png" alt=""/>
                        
                    </div>
                   <div className="iconShadow">
                       <div className="iconNumber">3</div>
                        <img className="icon" src="./Media/icons/bell.png" alt=""/>
                   </div>
                   
                </RightIcon>
            </InnerWrapper>
        
    )
}