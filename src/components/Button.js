import React from "react";
import StyledButton from './styles/StyledButton';


const Button = ({content, type, onButtonClick}) => {

  return (
    <StyledButton
      zero={content === "0" ? "zero" : ""}
      operator={type === "operator" ? "operator" : ""}
      function={type === "function" ? "function" : ""}
      onClick={onButtonClick(content)}
    >
      {content}
    </StyledButton>
  );
};

export default Button;