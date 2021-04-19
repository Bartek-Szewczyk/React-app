import React,{FC, useEffect} from 'react';
import useDropdown from 'react-dropdown-hook';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { pushActualSite } from '../../actions/actualSiteAction';
import { IState } from '../../reducers';
import { IPhotoReducer } from '../../reducers/photoReducers';
import { IPostsReducer } from '../../reducers/postsReducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { List } from '../Resume/List';
import './Entities.css';

type PushActualSite = ReturnType<typeof pushActualSite>;


const Wrapper=styled.div`
    width: 1200px;
    margin-left:auto;
    margin-right:auto;
    margin-top:50px;
`;
const InnerWrapper=styled.div`
    width:100%;
    align-items: center;
`;
const Title=styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:0px
`;
const Navigate=styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:0px
`;

const SectionName=styled.h2`
    text-align: left;
    color:grey;
    padding-left:15px;
    margin-bottom:0px;
    justify-content: center;
    align-items: center;
 `;
 const InputWrapper = styled.div`
    text-align: left;
    width:180px;
    display: inline-block;
    margin-right:40px;
`;
const Filter = styled.input`
    width: 95%;
    font-size: 18px;
    padding: 5px;
`;

const Followed=styled.div`
    padding:6px;
    width: 150px;
    align-items: center;
    border: 2px solid blue;
    border-radius: 5px;
`;

const FolMenu = styled.div`
    width:100%;
    display: inline-flex;
    font-size: 18px;
    justify-content: space-between;
    color:blue;
    align-items: center;
`;

const AllBox=styled.div`
    width:100%;
    display:block;
    clear:both;
`;
const SingleBox=styled.div`
    text-align:left;
    display:flex;
    box-shadow: 0 0 4px grey;
    border-radius: 5px;
    float:left;
    margin:5px;
    `;

const BoxImg=styled.img`
    width:25%;
    margin:5px;
    border-radius: 5px;
`;

const BoxText=styled.div`
`;

const BoxTitle=styled.h3`
    color:blue;
    font-size:100%;
`;
const BoxCompany=styled.p`
    color:grey;
    margin-bottom:0;
    margin-top:3px;
    font-size:10px;
`;

const Layout = styled.div`

`;

export const Entities: FC = ()=>{

const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

const { photoList }= useSelector<IState, IPhotoReducer>(globalState => ({
    ...globalState.photos
  }))

const { usersList }= useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users,
    }))    
 const dispatch = useDispatch();
 useEffect(()=>{
    dispatch<PushActualSite>(pushActualSite({ 
      name: 'Entities',
      icon: '../Media/icons/entities.png'
  }))
  },[]);

  function rand( min: number, max: number ){
      if ( min > max ){
        let tmp = min;
        min = max;
        max = tmp;
    }
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

  let post: Array<object>=[];
  function draw() {
      
      for (let i = 0; i < 24; i++) {
          let num=rand(0,9);
          post.push(<SingleBox className='box' >
                        <BoxImg src={photoList[i]? photoList[i].url:" "} />
                        <BoxText>
                            <BoxTitle>
                                {usersList[num]?usersList[num].company.name:" "}
                            </BoxTitle>
                            <BoxCompany>
                                {usersList[num]?usersList[num].address.suite:" "}, {usersList[num]?usersList[num].address.street:" "}, {usersList[num]?usersList[num].address.city:" "}
                            </BoxCompany>
                        </BoxText>
                    </SingleBox>)
                
      }
      return post;
  }

  function layout() {


      let boxList=document.querySelectorAll('.box');
      let layout =document.querySelector('.laText');
      let mosaic = document.querySelector('.mosaicImg');
      let list = document.querySelector('.listImg')
      boxList.forEach(box => {
          if (box.classList.contains('list')) {
              box.classList.remove('list');
          }else{
              box.classList.add('list')
              
          }
          
      });

      if(layout?.innerHTML==="List"){
        list?.classList.add('laBackground');
        mosaic?.classList.remove('laBackground');
        layout.innerHTML="Mosaic";
          
      }else if (layout?.innerHTML==="Mosaic") {
          mosaic?.classList.add('laBackground');
          list?.classList.remove('laBackground');
          layout.innerHTML="List";
      }
      
  }
  
    return(
    <Wrapper>
            <InnerWrapper>
                <Title>
                    <SectionName>
                        Entities
                        <img style={{paddingLeft:'10px'}} src="../Media/icons/cog.svg" alt=""/>
                    </SectionName>
                    <Layout onClick={layout}>
                        <div className="layout">
                            <img className="mosaicImg " src="../Media/icons/mosaic.svg" alt=""/>
                            <span className="laText">Mosaic</span> 
                            <img className="listImg laBackground" src="../Media/icons/list.svg" alt=""/>
                        </div>
                    </Layout>
                </Title>
                <Navigate>
                    <div>
                        left icon
                    </div>
                    <div style={{display:'flex'}}>
                        <InputWrapper>
                            <Filter type="text" placeholder="Search..."/>
                            <img className="searchIcon" src="./Media/icons/search.png" alt=""/>
                    </InputWrapper>
                    <Followed ref={wrapperRef}>
                         <FolMenu onClick={toggleDropdown}>
                            <div>
                                <img style={{height:'15px'}} src='../Media/icons/followed.svg' alt=""/>
                            <span style={{paddingLeft: "10px"}}>Followed</span> 
                            </div>
                            
                            <div> <img style={{paddingRight: "10px", fill:"blue"}} src="./Media/icons/arrow-down.svg" alt=""/></div>
                        
                        </FolMenu>
                        <div>
                            {dropdownOpen &&
                            <List/>}</div>
                    </Followed>
                    </div>
                    
                </Navigate>
                <AllBox>
                    {draw()}
                </AllBox>

            </InnerWrapper>
        </Wrapper>
)
}