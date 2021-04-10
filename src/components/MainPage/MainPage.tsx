import React,{FC} from 'react';
import styled from 'styled-components'


import {Navbar} from '../Navbar/Navbar';
import {LeftMenu} from '../LeftMenu/LeftMenu';
import {Publications} from '../Publications/Publications';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  useLocation,
} from "react-router-dom";
const Wrapper = styled.div`
  width:100vw;
  text-align: center;
`;

const InnerWrapper = styled.div`
  padding: 5px;
  max-width: 1500px;
  margin-left:auto;
  margin-right:auto
`;


const Content = styled.div`
  max-width: 1200px;
  align-items: center;
  display: flex;
  
`;

const User= {
  name: 'Humberta Swift',
  picture: './Media/Profile/images.jpg'

}

const App:FC =()=>{

 return(
    <Router>
      
      <Wrapper>
        <Navbar user={User}/>
        <InnerWrapper>
          
          <Content>
            <LeftMenu user={User}/>
          
            <Switch>
              <Route path="/publications">
                <Publications/>
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

        </InnerWrapper>
      </Wrapper>
    </Router>
  );
};



export default App;
