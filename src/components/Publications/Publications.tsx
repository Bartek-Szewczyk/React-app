import React,{FC} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IState } from '../../reducers';
import { IPhotoReducer } from '../../reducers/photoReducers';

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

export const Publications: FC = ()=>{

const { photoList }= useSelector<IState, IPhotoReducer>(globalState => ({
    ...globalState.photos
  }))

  const photo = {
      src: photoList[56]? photoList[56].url:" "
  };

    return(
        
    <Wrapper> 
        <DivImg>
            <ImgPublications src={photo.src}/>
            
        </DivImg>
        Publication content
        
        
    </Wrapper>
)
}