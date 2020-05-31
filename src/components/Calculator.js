import React, { useState } from "react";
import commafy from "./utils/commafy";
import Button from "./button/Button";
import StyledCalculator from "./styles/StyledCalculator";
import StyledHeader from "./styles/StyledHeader";
import StyledResult from "./styles/StyledResult";
import StyledFooter from "./styles/StyledFooter";
import ButtonPosition from "./button/ButtonPosition";

const Calculator = ({ initialValue }) => {
  const [result, setResult] = useState(initialValue);
  // This hook ↓ is used to store the previous number when doing an operation
  const [prevNumber, setPrevNumber] = useState("0");
  // This hook ↓ is used to keep track of what operator is being used
  const [operator, setOperator] = useState(null);

  const handleButtonClick = (content) => () => {
    const number = parseFloat(result);

    //Conditional statement to clear the result on screen
    if (content === "AC") {
      setResult("0");
      setPrevNumber("0");
      setOperator(null);
      return;
    }

    //Conditional statement to make the number negative
    if (content === "±") {
      setResult((number * -1).toString());
      return;
    }

    //Conditional statement that calculates percentage
    if (content === "%") {
      setResult((number / 100).toString());
      setPrevNumber("0");
      setOperator(null);
      return;
    }

    if (content === ".") {
      if (result.includes(".")) return;

      setResult(result + ".");
      return;
    }

    if (content === "+") {
      if (operator !== null) {
        if (operator === "+") {
          setPrevNumber(prevNumber + parseFloat(result));
        } else if (operator === "−") {
          setPrevNumber(prevNumber - parseFloat(result));
        } else if (operator === "×") {
          setPrevNumber(prevNumber * parseFloat(result));
        } else if (operator === "÷") {
          setPrevNumber(prevNumber / parseFloat(result));
        }
      } else {
        setPrevNumber(parseFloat(result));
      }
      setResult("0");
      setOperator("+");
      return;
    }

    if (content === "-") {
      if (operator !== null) {
        if (operator === "+") {
          setPrevNumber(prevNumber + parseFloat(result));
        } else if (operator === "−") {
          setPrevNumber(prevNumber - parseFloat(result));
        } else if (operator === "×") {
          setPrevNumber(prevNumber * parseFloat(result));
        } else if (operator === "÷") {
          setPrevNumber(prevNumber / parseFloat(result));
        }
      } else {
        setPrevNumber(parseFloat(result));
      }
      setResult("0");
      setOperator("-");
      return;
    }

    if (content === "×") {
      if (operator !== null) {
        if (operator === "+") {
          setPrevNumber(prevNumber + parseFloat(result));
        } else if (operator === "−") {
          setPrevNumber(prevNumber - parseFloat(result));
        } else if (operator === "×") {
          setPrevNumber(prevNumber * parseFloat(result));
        } else if (operator === "÷") {
          setPrevNumber(prevNumber / parseFloat(result));
        }
      } else {
        setPrevNumber(parseFloat(result));
      }
      setResult("0");
      setOperator("×");
      return;
    }

    if (content === "÷") {
      if (operator !== null) {
        if (operator === "+") {
          setPrevNumber(prevNumber + parseFloat(result));
        } else if (operator === "−") {
          setPrevNumber(prevNumber - parseFloat(result));
        } else if (operator === "×") {
          setPrevNumber(prevNumber * parseFloat(result));
        } else if (operator === "÷") {
          setPrevNumber(prevNumber / parseFloat(result));
        }
      } else {
        setPrevNumber(parseFloat(result));
      }
      setResult("0");
      setOperator("÷");
      return;
    }

    if (content === "=") {
      if (!operator) return;

      if (operator === "+") {
        setResult((prevNumber + parseFloat(result)).toString());
      } else if (operator === "-") {
        setResult((prevNumber - parseFloat(result)).toString());
      } else if (operator === "×") {
        setResult((prevNumber * parseFloat(result)).toString());
      } else if (operator === "÷") {
        setResult((prevNumber / parseFloat(result)).toString());
      }
      setPrevNumber("0");
      setOperator(null);
      return;
    }

    if (
      result[result.length - 1] === "." ||
      result[result.length - 1] === "0"
    ) {
      setResult(result + content);
    } else {
      setResult(parseFloat(number + content).toString());
    }
  };


  return (
    <>
      <StyledCalculator>
        <StyledHeader>Calculator</StyledHeader>
        <StyledResult prevResult>{prevNumber}</StyledResult>
        <StyledResult >{commafy(result)}</StyledResult>
        <ButtonPosition>
          <Button
            onButtonClick={handleButtonClick}
            content="AC"
            type="function"
          />
          <Button
            onButtonClick={handleButtonClick}
            content="±"
            type="function"
          />
          <Button
            onButtonClick={handleButtonClick}
            content="%"
            type="function"
          />
          <Button
            onButtonClick={handleButtonClick}
            content="÷"
            type="operator"
          />
          <Button onButtonClick={handleButtonClick} content="7" />
          <Button onButtonClick={handleButtonClick} content="8" />
          <Button onButtonClick={handleButtonClick} content="9" />
          <Button
            onButtonClick={handleButtonClick}
            content="×"
            type="operator"
          />
          <Button onButtonClick={handleButtonClick} content="4" />
          <Button onButtonClick={handleButtonClick} content="5" />
          <Button onButtonClick={handleButtonClick} content="6" />
          <Button
            onButtonClick={handleButtonClick}
            content="-"
            type="operator"
          />
          <Button onButtonClick={handleButtonClick} content="1" />
          <Button onButtonClick={handleButtonClick} content="2" />
          <Button onButtonClick={handleButtonClick} content="3" />
          <Button
            onButtonClick={handleButtonClick}
            content="+"
            type="operator"
          />
          <Button onButtonClick={handleButtonClick} content="0" />
          <Button onButtonClick={handleButtonClick} content="." />
          <Button
            onButtonClick={handleButtonClick}
            content="="
            type="operator"
          />
        </ButtonPosition>
        <StyledFooter>
          By Angel López
          <span role="img" aria-label="heart">
            🚀
          </span>
        </StyledFooter>
      </StyledCalculator>
    </>
  );
};

export default Calculator;
