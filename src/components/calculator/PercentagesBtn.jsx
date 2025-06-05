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
background: ${Theme.colors.Green900};
color: ${Theme.colors.White};
font-size: 2rem;
text-align: center;
border-radius: 1rem;
padding: 1rem;
width: 45%;
height: 5rem;
font-family: "Space Mono", monospace;
`
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
`

const PercentagesBtn = () => {
  const { handleClick } = useContext(Context)
  const Percentages = [5, 10, 15, 25, 50]

  return (
    <Section>
      <Title>Select Tip %</Title>
      <DivBtn>
        {Percentages.map((item, i) => (
          <Button key={i} onClick={()=> handleClick(item)}>
            {item}%
          </Button>
        ))}
        <Input type="number" placeholder="Custom" max={100} />
      </DivBtn>
    </Section>
  );
};

export { PercentagesBtn };