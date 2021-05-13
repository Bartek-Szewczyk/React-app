import React,{FC} from 'react';
import styled from 'styled-components';
import { Resume } from '../Resume/Resume';

const Wrapper = styled.div`

`;



interface IWorkspacesSite{
    icon: string;
    title: string;
    user:{
        id: number;
    }
}

export const WorkspacesSite: FC<IWorkspacesSite> =props=>{
return(
    <Wrapper>

        <Resume user={props.user}/>
    </Wrapper>
)
}