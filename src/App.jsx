import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputType, value) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [inputType]: +value,
      };
    });
  };

  const inputIsValid= userInput.duration >=1
  return (
    <div>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      {!inputIsValid && <p className="center">Please enter valid duration year.</p> }
      {inputIsValid && <Results input={userInput} />}
    </div>
  );
}

export default App;
