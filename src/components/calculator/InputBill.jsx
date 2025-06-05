import React, { useContext, useState } from "react";
import IconDollar from "../../assets/images/icon-dollar.svg"
import { DivInput, Img, Input, Label, Title } from "./Input.styles";
import { Context } from "../../context/MyContext";



const InputBill = () => {
  const {bill, handleBill} = useContext(Context)


  return (
    <>
      <Label>
        <Title>Bill</Title>
        <DivInput>
          <Img src={IconDollar} alt="icon-dollar" />
          <Input type="number" placeholder="0" min={0} onChange={handleBill} value={bill} />
        </DivInput>
      </Label>
    </>
  )
}

export { InputBill };