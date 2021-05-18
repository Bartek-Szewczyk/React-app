import React,{FC, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { pushActualSite } from '../../actions/actualSiteAction';
import { Resume } from '../Resume/Resume';

type PushActualSite = ReturnType<typeof pushActualSite>;

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
    
    const dispatch = useDispatch();
 useEffect(()=>{
    dispatch<PushActualSite>(pushActualSite({ 
      name: 'Client contract',
      icon: '../Media/icons/contract.svg'
  }))
  },[dispatch]);

return(
    <Wrapper>

        <Resume user={props.user}/>
    </Wrapper>
)
}