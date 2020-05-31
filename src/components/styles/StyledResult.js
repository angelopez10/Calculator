import styled from "styled-components";

const StyledResult = styled.div`
  font-size: 70px;
  font-weight: 300;
  margin-bottom: 10px;
  text-align: right;

  ${(props) =>
    props.prevResult &&
    `
    margin-bottom: 5px;
    font-size: 40px;
    `}
`;

export default StyledResult;