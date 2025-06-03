import React from "react"
import { Section } from "./Input.styles";
import styled from "styled-components";
import { Theme } from "../../GlobalStyle";

const Div = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: ${props => props.$primary ? "2rem" : "0rem"};
`
const Text = styled.p`
display: flex;
flex-direction: column;
& span:nth-child(1){
  color: ${Theme.colors.White};
  font-size: 1.4rem;
  font-weight: 600;
}
& span:nth-child(2){
  color: ${Theme.colors.Grey400};
  font-size: 1rem;
  font-weight: 600;
  margin-top: .5rem;
}
`
const Result = styled.p`
color: ${Theme.colors.Green400};
font-size: 2.5rem;
font-weight: bold;
`
const BtnReset = styled.button`
margin-top: 3rem;
border: none;
background: ${Theme.colors.Green400};
color: ${Theme.colors.Green900};
font-weight: 800;
text-transform: uppercase;
text-align: center;
padding: 1rem;
width: 100%;
border-radius: 1rem;
`

const Results = () => {
  return (
    <Section $primary>
      <Div>
        <Text><span>Tip Amount</span><span> / person</span></Text>
        <Result>$4.27</Result>
      </Div>
      <Div $primary>
        <Text><span>Total</span><span> / person</span></Text>
        <Result>$32.79</Result>
      </Div>

      <BtnReset>
        Reset
      </BtnReset>
    </Section>
  );
};

export { Results };