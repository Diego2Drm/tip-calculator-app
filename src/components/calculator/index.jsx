import React from "react";
import { InputBill } from "./InputBill";
import styled from "styled-components";
import { Theme } from "../../GlobalStyle";
import { PercentagesBtn } from "./PercentagesBtn";
import { InputPeople } from "./InputPeople";
import { Results } from "./Results";

const Section = styled.section`
  background: ${Theme.colors.White};
  border-radius: 2rem 2rem 0 0;
  /* height: 100%; */
  margin-top: 3rem;
  padding: 2rem;
  padding-bottom: 3rem;

  @media (min-width: 1024px){
    width: 70%;
    margin: 5rem auto;
    display: flex;
    gap: 2rem;
    border-radius: 2rem;
    box-shadow: 0 0 5rem ${Theme.colors.Green400};
  }
`

const Calculator = () => {
  return (
    <Section>
      <div style={{width: "100%", height: "100%"}}>
        <InputBill />
        <PercentagesBtn />
        <InputPeople />
      </div>
      <div style={{width: "100%"}}>
        <Results />
      </div>
    </Section>
  );
};

export { Calculator };