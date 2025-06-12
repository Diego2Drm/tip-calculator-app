import React, { useContext } from "react";
import styled from "styled-components";
import { Theme } from "../../GlobalStyle";
import { Section } from "./Input.styles";
import { Context } from "../../context/MyContext";


const Title = styled.h2`
color: ${Theme.colors.Grey500};
font-weight: 600;
font-size: 1.5rem;
`
const DivBtn = styled.div`
margin-top: 2rem;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
gap: 1rem;
`
const Button = styled.button`
background: ${({$isactive}) => ( $isactive ? Theme.colors.Green400 : Theme.colors.Green900)};
border: 1px solid ${({$isactive}) => ( $isactive ? Theme.colors.Grey400 : Theme.colors.Green900)};
color: ${Theme.colors.White};
font-size: 2rem;
text-align: center;
border-radius: 1rem;
padding: 1rem;
width: 45%;
height: 5rem;
font-family: "Space Mono", monospace;
@media (min-width: 1024px){
  width: 15rem;
  cursor: pointer;
}
`
// background:${({ total }) => (total ? Theme.colors.Green400 : Theme.colors.Grey500)} ;
const Input = styled.input`
background: ${Theme.colors.Grey50};
box-shadow: 0 0 .5rem ${Theme.colors.Grey200};
border: none;
border-radius: 1rem;
text-align: end;
font-size: 2rem;
padding: 1rem;
width: 45%;
height: 5rem;
color: ${Theme.colors.Green900};
font-weight: bold;
font-family: "Space Mono", monospace;
&::placeholder{
  font-size: 2rem;
  color: ${Theme.colors.Grey500};
  font-weight: bold;
}
@media (min-width: 1024px){
  width: 15rem;
}
`

const PercentagesBtn = () => {
  const { isActive, handleClick, custom, handleCustom } = useContext(Context)
  const Percentages = [
    {percentage: 5, id: 1},
    {percentage: 10, id: 2},
    {percentage: 15, id: 3},
    {percentage: 25, id: 4},
    {percentage: 50, id: 5},
  ]

// 5, 10, 15, 25, 50
  return (
    <Section >
      <Title>Select Tip %</Title>
      <DivBtn>
        {Percentages.map((item) => (
          <Button key={item.id} onClick={() => handleClick(item.percentage, item.id)}
          $isactive={isActive == item.id}>
            {item.percentage}%
          </Button>
        ))}
        <Input type="number" placeholder="Custom" max={100} min={0} onChange={handleCustom} value={custom} />
      </DivBtn>
    </Section>
  );
};

export { PercentagesBtn };