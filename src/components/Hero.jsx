import React from 'react'
import Logo from '../assets/images/logo.svg'
import styled from 'styled-components';
import { Theme } from '../GlobalStyle';

const Background = styled.section`
background: ${Theme.colors.Grey200};
width: 100%;
height: 100vh;
padding: 3rem 0 0;
`
const ImgContent = styled.div`
width: 100%;
display: flex;
justify-content: center;
`


const Hero = (props) => {
  const { children } = props
  return (
    <Background>
      <ImgContent>
        <img src={Logo} alt="logo" />
      </ImgContent>
      {children}
    </Background>
  );
};

export { Hero };