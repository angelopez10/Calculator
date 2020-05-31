import React from "react";
import StyledButton from "./StyledButton";

const Button = ({ content, type, onButtonClick }) => {
  return (
    <StyledButton
      zero={content === "0" ? "zero" : ""}
      operator={type === "operator" ? "operator" : ""}
      function={type === "function" ? "function" : ""}
      onClick={onButtonClick(content)}
      data-testid="button"
    >
      {content}
    </StyledButton>
  );
};

export default Button;
