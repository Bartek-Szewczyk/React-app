import {FC} from 'React';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';


const InnerWrapper = styled.div`
    width: 20%;
    background: ${Colors.white}
    
`;



export const LeftMenu: FC =()=>{
    return(
        <Wrapper>
            <InnerWrapper>
                <img src="./Media/logo.png" alt=""/>
                <div>
            
                </div>
                
                
            </InnerWrapper>
        </Wrapper>
    )
}