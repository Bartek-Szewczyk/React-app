import {FC} from 'React';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';

//import {ExpandedMenu} from "./ExpandedMenu";

const InnerWrapper = styled.div`
    width: 100%;
    max-height: 50px;
    background: ${Colors.white};
    display: inline-flex;
    padding: 5px;
    
`;
const RightIcon = styled.div`
    
    left: 30px
`;
const InputWrapper = styled.div`
    justify-content: center;
`;

export const Navbar: FC =()=>{
    return(
        <Wrapper>
            <InnerWrapper>
                <img src="./Media/logo.png" alt=""/>
                <div>
            
                </div>
                <InputWrapper>
                    <input type="text"/>
                    <img src="./Media/icons/search.png" alt=""/>
                </InputWrapper>
                <RightIcon>
                    <img src="./Media/icons/house.png" alt=""/>
                    <img src="./Media/icons/comments.png" alt=""/>
                    <img src="./Media/icons/bell.png" alt=""/>
                </RightIcon>
            </InnerWrapper>
        </Wrapper>
    )
}