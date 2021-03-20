import React,{FC} from 'react';
import styled from 'styled-components'


import {Navbar} from '../Navbar/Navbar';
import {LeftMenu} from '../LeftMenu/LeftMenu';

const Wrapper = styled.div`
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
