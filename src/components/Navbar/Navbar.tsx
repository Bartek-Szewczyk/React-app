import {FC} from 'react';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';

import {Colors} from '../../styledHelpers/Colors';

import './Navbar.css'


import {ExpandedMenu} from './ExpandedMenu';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    width: 100vw;
    height: 50px;
    display: inline-flex;
    padding-top:12px;
    padding-bottom:10px;
    background: ${Colors.white};
    box-shadow: 0px 0px 5px gray;
`;
const RightIcon = styled.div`
    display: inline-box;
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
    width: 250px;
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
            <Wrapper>
                <img className="logo" src="./Media/logo.png" alt=""/>

                <ExpMenu ref={wrapperRef}>
                    <NavMenu onClick={toggleDropdown}>
                        <div>
                            <img  src="./Media/icons/house.png" alt=""/>
                           <span style={{paddingLeft: "10px"}}>Home</span> 
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
            </Wrapper>
        
    )
}