import React, { FC } from 'react';
import styled from 'styled-components'

const Wrapper=styled.div`
width: 100%;
`;

const Imagine = styled.img``;

export const Error404: FC=()=>{
    return (
        <Wrapper>
            <Imagine src="./Media/404.png" />
            
        </Wrapper>
    )
}