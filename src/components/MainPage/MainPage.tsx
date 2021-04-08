import React,{FC} from 'react';
import styled from 'styled-components'

import {Colors} from '../../styledHelpers/Colors';

import {Navbar} from '../Navbar/Navbar';
import {LeftMenu} from '../LeftMenu/LeftMenu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

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
    <Router>
      <Wrapper>
        <Navbar/>
        <Content>
          <LeftMenu/>
         
          <Switch>
            <Route path="/publications">
              Publications content
            </Route>
            <Route path="/people">
              people content
            </Route>
            <Route path="/entities">
              entities content
            </Route>
            <Route path="/administration">
              Administration content
            </Route>
            <Route path="/ecosystem">
              Ecosystem content
            </Route>
            <Route path="/">
              
            </Route>
          </Switch>
        </Content>


      </Wrapper>
    </Router>
  );
};



export default App;
