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
import { Error404 } from '../../Error/Error404';


const Wrapper = styled.div`
  width:100vw;
  text-align: center;
`;

const InnerWrapper = styled.div`
  width:100%;
  margin-left:auto;
  margin-right:auto;
  display:flex;
`;


const Content = styled.div`
  max-width: 1200px;
  align-items: center;
  margin-left:auto;
  margin-right:auto;
  margin-top:20px
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
          <LeftMenu user={User}/>
          <Content>
            
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
              <Route path="/404">
                <Error404/>
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
