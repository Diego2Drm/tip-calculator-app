import React from "react";
import IconPerson from "../../assets/images/icon-person.svg"
import { DivInput, Img, Input, Label, Section, Title } from "./Input.styles";


const InputPeople = () => {
  return (
    <Section>
      <Label>
        <Title>Number of People</Title>
        <DivInput>
          <Img src={IconPerson} alt="icon-person" />
          <Input type="number" placeholder="0" />
        </DivInput>
      </Label>
    </Section>
  );
};

export { InputPeople };