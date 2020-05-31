import styled from "styled-components";

const StyledButton = styled.div`
  align-items: center;
  background: #333;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  font-size: 30px;
  height: 60px;
  justify-content: center;
  width: 60px;
  transition: filter 0.3s ease-in;
  user-select: none;
  
  :active, :focus {
    filter: brightness(120%);
  }

  ${(props) =>
    props.zero &&
    `
  width: 140px;
  grid-column: 1 / span 2;
  border-radius: 57.5px;
  position: relative;
  justify-content: center;
    `}

${(props) =>
  props.function &&
  `
  color: black;
  background: #a5a5a5;
    `}

${(props) =>
  props.operator &&
  `
  background: #f1a33c;
    `}
`;

export default StyledButton;
