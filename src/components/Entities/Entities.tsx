import React,{FC, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { pushActualSite } from '../../actions/actualSiteAction';
import { IState } from '../../reducers';
import { IPhotoReducer } from '../../reducers/photoReducers';
import { setSite } from '../MainPage/MainPage'


type PushActualSite = ReturnType<typeof pushActualSite>;


const Wrapper=styled.div`
    width:100%;
    height:100%;
    display:flex
`;


export const Entities: FC = ()=>{

const { photoList }= useSelector<IState, IPhotoReducer>(globalState => ({
    ...globalState.photos
  }))

  const photo = {
      src: photoList[56]? photoList[56].url:" "
  };
  const Site={ 
      name: 'Entities',
      icon: '../Media/icons/entities.png'
  }
const dispatch = useDispatch();
 useEffect(()=>{
    dispatch<PushActualSite>(pushActualSite(Site));
    
  },[]);
    return(
        
    <Wrapper> 
        Entities constent
    </Wrapper>
)
}