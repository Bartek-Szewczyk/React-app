import {FC} from 'React';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';

//import {ExpandedMenu} from "./ExpandedMenu";

const InnerWrapper = styled.div`
    width: 1200px;
    background: ${Colors.black}
`;


export const Navbar: FC =()=>{
    return(
        <Wrapper>
            <InnerWrapper>
                <img src="./Media/logo.png"/>
                <div>
            
                </div>
            </InnerWrapper>
        </Wrapper>
    )
}