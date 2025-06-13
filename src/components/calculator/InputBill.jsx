import React, { useContext, useState } from "react";
import IconDollar from "../../assets/images/icon-dollar.svg"
import { DivContent, DivInput, Img, Input, Label, TextError, Title } from "./Input.styles";
import { Context } from "../../context/MyContext";



const InputBill = () => {
  const { bill, handleBill, hasBill } = useContext(Context)


  return (
    <>
      <Label>
        <DivContent>
          <Title>Bill</Title>
          {
            hasBill && <TextError>Can't be zero</TextError>
          }
        </DivContent>
        <DivInput>
          <Img src={IconDollar} alt="icon-dollar" />
          <Input type="number" placeholder="0" min={0} onChange={handleBill} value={bill} $hasData={hasBill} />
        </DivInput>

      </Label>
    </>
  )
}

export { InputBill };