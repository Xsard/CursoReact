import React, { useState } from "react";
import { useCounter, useElement } from "../hooks/";
export const PageCounter = () => {
  /*    const[count, setCounter] = useState(0)

    const cuenta = (value) => {
        setCounter(count + value)
    }*/
  const { number, sum, subtraction, memoNumber } = useCounter({
    value: 10,
    numSum: 10,
    numSub: 20,
  });
  const { buttonCustom } = useElement();
  return (
    <>
      <h3>{number}</h3>
      {buttonCustom({ backgroundColor: "green" }, "+10", sum)}
      {buttonCustom({ backgroundColor: "red" }, "-20", subtraction)}
      <h3>{memoNumber}</h3>
    </>
  );
};
