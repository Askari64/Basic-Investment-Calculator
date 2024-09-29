import { useState } from "react";

import Input from "./Input";
import Results from "./Results";

function Wrapper() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const checkValidity = userInput.duration >= 1;

  function handleChange(identifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [identifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Input onChange={handleChange} userInput={userInput} />
      {!checkValidity && <p className="center">Duration can not be 0</p>}
      {checkValidity && <Results inputData={userInput} />}
    </>
  );
}

export default Wrapper;
