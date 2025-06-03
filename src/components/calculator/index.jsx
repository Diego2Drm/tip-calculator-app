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
`

const Calculator = () => {
  return (
    <Section>
      <InputBill />
      <PercentagesBtn />
      <InputPeople />
      <Results />
    </Section>
  );
};

export { Calculator };