import React,{FC} from 'react';
import styled from 'styled-components'

import {Colors} from '../../styledHelpers/Colors';

import {Navbar} from '../Navbar/Navbar';
import {LeftMenu} from '../LeftMenu/LeftMenu';

const Wrapper = styled.div`
  
  width:100%;
  height: 100vh;
`;

const Content = styled.div`
  max-width: 1200px;
  align-items: center;
  display: flex;
  
`;


const App:FC =()=>{
  return(
    <Wrapper>
      <Navbar/>
      <Content>
        <LeftMenu/>
        <div>content</div>
      </Content>
    
    </Wrapper>
    
  );
};

export default App;
