import styled from "styled-components";

const StyledResult = styled.div`
  font-size: 70px;
  font-weight: 300;
  margin-bottom: 10px;
  text-align: right;
  overflow-x: auto;
  &::-webkit-scrollbar {
     width: 10px;
     height: 5px;
     background: #a5a5a5;
  };

  ${(props) =>
    props.prevResult &&
    `
    overflow-x: hidden;
    margin-bottom: 5px;
    font-size: 40px;
    `}
`;

export default StyledResult;