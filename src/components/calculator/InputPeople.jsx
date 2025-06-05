import React, { useContext } from "react";
import IconPerson from "../../assets/images/icon-person.svg"
import { DivInput, Img, Input, Label, Section, Title } from "./Input.styles";
import { Context } from "../../context/MyContext";


const InputPeople = () => {
  const { people, handlePeople } = useContext(Context);
  return (
    <Section>
      <Label>
        <Title>Number of People</Title>
        <DivInput>
          <Img src={IconPerson} alt="icon-person" />
          <Input type="number" placeholder="0" min={0} onChange={handlePeople} value={people}/>
        </DivInput>
      </Label>
    </Section>
  );
};

export { InputPeople };