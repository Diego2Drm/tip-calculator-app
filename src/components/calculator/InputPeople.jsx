import React, { useContext } from "react";
import IconPerson from "../../assets/images/icon-person.svg"
import { DivContent, DivInput, Img, Input, Label, Section, TextError, Title } from "./Input.styles";
import { Context } from "../../context/MyContext";


const InputPeople = () => {
  const { people, handlePeople, hasPeople } = useContext(Context);
  return (
    <Section>
      <Label>
        <DivContent>
          <Title>Number of People</Title>
          {
            hasPeople && <TextError>Can't be zero</TextError>
          }
        </DivContent>
        <DivInput>
          <Img src={IconPerson} alt="icon-person" />
          <Input type="number" placeholder="0" min={0} onChange={handlePeople} value={people} $hasData={hasPeople}/>
        </DivInput>
      </Label>
    </Section>
  );
};

export { InputPeople };