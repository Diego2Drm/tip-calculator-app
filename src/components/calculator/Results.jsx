import React, { useContext } from "react"
import { Section } from "./Input.styles";
import styled from "styled-components";
import { Theme } from "../../GlobalStyle";
import { Context } from "../../context/MyContext";

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
@media (min-width: 1024px){
  & span:nth-child(1){
  font-size: 1.8rem;
}
& span:nth-child(2){
  font-size: 1.4rem;
}
}
`
const Result = styled.p`
color: ${Theme.colors.Green400};
font-size: 2.5rem;
font-weight: bold;
@media (min-width: 1024px){
  font-size: 3rem;
}
`
const BtnReset = styled.button`
margin-top: 3rem;
border: none;
background:${({ $total }) => ($total ? Theme.colors.Green400 : Theme.colors.Grey500)};
color: ${({ $total }) => ($total ? Theme.colors.Green900 : Theme.colors.Grey400)};
font-weight: 800;
text-transform: uppercase;
text-align: center;
padding: 1rem;
width: 100%;
border-radius: 1rem;
cursor: ${({ $total }) => ($total ? "pointer" : "not-allowed")};
opacity: ${({ $total }) => ($total ? 1 : 0.5)};
`

const Results = () => {
  const { totalAmount, total, bill, people, custom, isActive,calculator ,handleClear } = useContext(Context)

  return (
    <Section $primary>
      <div>
        <Div>
          <Text><span>Tip Amount</span><span> / person</span></Text>
          <Result>{Number(totalAmount).toFixed(2)}</Result>
        </Div>
        <Div $primary>
          <Text><span>Total</span><span> / person</span></Text>
          <Result>{Number(total).toFixed(2)}</Result>
        </Div>
      </div>

      <BtnReset $total={ bill || people || isActive || calculator || custom} onClick={handleClear}>
        Reset
      </BtnReset>
    </Section>
  );
};

export { Results };
