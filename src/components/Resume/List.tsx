import React, { FC } from 'react';
import styled from 'styled-components';

const Menu = styled.div`
    border: 1px solid grey;
    text-align: left;
    position:absolute;
    width:130px;
    background-color:white;
    padding:10px;
`;
export const List: FC =()=>{
    return(
        <Menu>
            Lista <br/>
            Lista <br/>
            Lista <br/>
            Lista <br/>
            Lista <br/>
           
        </Menu>
    )
}