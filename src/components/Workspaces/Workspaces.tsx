import React, { Component, FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { IState } from '../../reducers';
import { IPhotoReducer } from '../../reducers/photoReducers';
import Slider from 'react-slick';
import { ISinglePhoto } from '../../entities/photos';
import Carousel from 'react-elastic-carousel'




const WorkspacesWrapper=styled.div`
  clear:both;
  width: 1200px;
  height: 300px;
  align-items: center;
  margin-left:auto;
  margin-right:auto;
  margin-top:40px;
  
`;

const SectionName=styled.h2`
  text-align: left;
  color:grey;
  padding-left:15px;
  margin-bottom:0px
 `;
const InnerWorkspaces=styled.div`
  width:100%;
  height:100%;
  display: flex;
  align-items: center;
  overflow-x: scroll;
`;

const WorkspacesBox=styled.div`
  background-color:white;
  box-shadow: 0 0 4px grey;
  width:300px;
  height:250px;
  min-width:300px;
  max-height:250px;
  justify-content: center;
  align-items: center;
  text-align:left;
  margin: 10px;
  border-radius:5px;
  overflow: hidden;
`;

const BoxImg=styled.img`
  width:100%;
  height:45%;
`;
 
 const BoxIcon=styled.img`
 background-color:white;
 padding:20px;
 border-radius:5px;
 height:60px;
 margin-top:-45px;
 margin-left:10px;
 box-shadow: 0 0 3px grey;
 `;

 const BoxTitle=styled.h3`
 margin-top:0px;
 margin-left:5px;
 `;

 const BoxLastUpdate=styled.p`
 margin-left:10px;
 `;

 const BoxInfo=styled.span`
 width:80%;
 justify-content:space-between;
  display:flex;
  margin-left:10px;
  margin-top:10px
 `;

 const Dot = styled.span`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-left:15px;
    margin-right:15px;
`;

export default class Workspaces extends Component{
 
 
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  // const { photoList }= useSelector<IState, IPhotoReducer>(globalState => ({
  //   ...globalState.photos

  // }))
    return (
      
        <WorkspacesWrapper>
            <SectionName>
              Workspaces
            </SectionName>
        <InnerWorkspaces>
              <WorkspacesBox>
                {/* <BoxImg src={photoList[30]? photoList[30].url:" "}/> */}
                <div style={{display:'flex'}}>
                  <BoxIcon src='../Media/icons/contract.svg' />
                  <BoxTitle>Client contract</BoxTitle>
                </div>
                <BoxInfo>
                  <img src="../Media/icons/contract.svg" alt=""/>
                  Contract
                  <Dot>
                        <img src="../Media/icons/dot.svg" style={{width:'4px'}} alt=""/>
                  </Dot>
                  <img src="../Media/icons/people.svg" alt=""/>
                  150 users
                </BoxInfo>
                <BoxLastUpdate>Last update 2 days ago</BoxLastUpdate>
              </WorkspacesBox>
              <WorkspacesBox>
                {/* <BoxImg src={photoList[31]? photoList[31].url:" "}/> */}
                <div style={{display:'flex'}}>
                  <BoxIcon src='../Media/icons/contract.svg' />
                  <BoxTitle>Supplier contract</BoxTitle>
                </div>
                <BoxInfo>
                  <img src="../Media/icons/contract.svg" alt=""/>
                  Contract
                  <Dot>
                        <img src="../Media/icons/dot.svg" style={{width:'4px'}} alt=""/>
                  </Dot>
                  <img src="../Media/icons/people.svg" alt=""/>
                  25 users
                </BoxInfo>
                <BoxLastUpdate>Last update 3 days ago</BoxLastUpdate>
              </WorkspacesBox>
              <WorkspacesBox>
                {/* <BoxImg src={photoList[32]? photoList[32].url:" "}/> */}
                <div style={{display:'flex'}}>
                  <BoxIcon src='../Media/icons/entities.svg' />
                  <BoxTitle>Corporate</BoxTitle>
                </div>
                <BoxInfo>
                  <img src="../Media/icons/entities2.svg" alt=""/>
                  Corporate
                  <Dot>
                        <img src="../Media/icons/dot.svg" style={{width:'4px'}} alt=""/>
                  </Dot>
                  <img src="../Media/icons/people.svg" alt=""/>
                  22 users
                </BoxInfo>
                <BoxLastUpdate>Last update 5 days ago</BoxLastUpdate>
              </WorkspacesBox>
              <WorkspacesBox>
                {/* <BoxImg src={photoList[33]? photoList[33].url:" "}/> */}
                <div style={{display:'flex'}}>
                  <BoxIcon src='../Media/icons/book.svg' />
                  <BoxTitle>Group Norms</BoxTitle>
                </div>
                <BoxInfo>
                  <img src="../Media/icons/book.svg" alt=""/>
                  Norms
                  <Dot>
                        <img src="../Media/icons/dot.svg" style={{width:'4px'}} alt=""/>
                  </Dot>
                  <img src="../Media/icons/people.svg" alt=""/>
                  35 users
                </BoxInfo>
                <BoxLastUpdate>Last update 10 days ago</BoxLastUpdate>
              </WorkspacesBox>
              <WorkspacesBox>
                {/* <BoxImg src={photoList[33]? photoList[33].url:" "}/> */}
                <div style={{display:'flex'}}>
                  <BoxIcon src='../Media/icons/book.svg' />
                  <BoxTitle>Group Norms</BoxTitle>
                </div>
                <BoxInfo>
                  <img src="../Media/icons/book.svg" alt=""/>
                  Norms
                  <Dot>
                        <img src="../Media/icons/dot.svg" style={{width:'4px'}} alt=""/>
                  </Dot>
                  <img src="../Media/icons/people.svg" alt=""/>
                  35 users
                </BoxInfo>
                <BoxLastUpdate>Last update 10 days ago</BoxLastUpdate>
              </WorkspacesBox>
              <WorkspacesBox>
                {/* <BoxImg src={photoList[33]? photoList[33].url:" "}/> */}
                <div style={{display:'flex'}}>
                  <BoxIcon src='../Media/icons/book.svg' />
                  <BoxTitle>Group Norms</BoxTitle>
                </div>
                <BoxInfo>
                  <img src="../Media/icons/book.svg" alt=""/>
                  Norms
                  <Dot>
                        <img src="../Media/icons/dot.svg" style={{width:'4px'}} alt=""/>
                  </Dot>
                  <img src="../Media/icons/people.svg" alt=""/>
                  35 users
                </BoxInfo>
                <BoxLastUpdate>Last update 10 days ago</BoxLastUpdate>
              </WorkspacesBox>
              <WorkspacesBox>
                {/* <BoxImg src={photoList[33]? photoList[33].url:" "}/> */}
                <div style={{display:'flex'}}>
                  <BoxIcon src='../Media/icons/book.svg' />
                  <BoxTitle>Group Norms</BoxTitle>
                </div>
                <BoxInfo>
                  <img src="../Media/icons/book.svg" alt=""/>
                  Norms
                  <Dot>
                        <img src="../Media/icons/dot.svg" style={{width:'4px'}} alt=""/>
                  </Dot>
                  <img src="../Media/icons/people.svg" alt=""/>
                  35 users
                </BoxInfo>
                <BoxLastUpdate>Last update 10 days ago</BoxLastUpdate>
              </WorkspacesBox>
             
            </InnerWorkspaces>
           </WorkspacesWrapper> 
    )
  }
}