import React,{FC} from 'react';
import styled from 'styled-components'


import {Navbar} from '../Navbar/Navbar';
import {LeftMenu} from '../LeftMenu/LeftMenu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { pathToFileURL } from 'url';

const Wrapper = styled.div`
    
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
