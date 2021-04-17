import React,{FC, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { pushActualSite } from '../../actions/actualSiteAction';
import { IState } from '../../reducers';
import { IPhotoReducer } from '../../reducers/photoReducers';


type PushActualSite = ReturnType<typeof pushActualSite>;


const Wrapper=styled.div`
    width:100%;
    height:100%;
    display:flex
`;


const DivImg=styled.div`
height:100%;
width:400px;

`;
const ImgPublications = styled.img`
    width:100%

`;

export const Home: FC = ()=>{

const { photoList }= useSelector<IState, IPhotoReducer>(globalState => ({
    ...globalState.photos
  }))

  const photo = {
      src: photoList[56]? photoList[56].url:" "
  };
  
const dispatch = useDispatch();
 useEffect(()=>{
    dispatch<PushActualSite>(pushActualSite({ 
      name: 'Home',
      icon: '../Media/icons/house.png'
  }))
  },[dispatch]);
    return(
        
    <Wrapper> 
       
        <DivImg>
            <ImgPublications src={photo.src}/>
            
        </DivImg>
        Publication content
        
        
    </Wrapper>
)
}