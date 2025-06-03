import React from "react";
import IconDollar from "../../assets/images/icon-dollar.svg"
import { DivInput, Img, Input, Label,  Title } from "./Input.styles";



const InputBill = () => {
  return (
    <>
      <Label>
        <Title>Bill</Title>
        <DivInput>
          <Img src={IconDollar} alt="icon-dollar" />
          <Input type="number" placeholder="0"/>
        </DivInput>
      </Label>
    </>
  )
}

export { InputBill };