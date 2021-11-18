import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: ${(props) => props.width || `150px`};
  height: ${(props) => props.height || `150px`};
  margin: 10px;
  background-color: ${(props) =>
    props.isTheme
      ? props.theme.mainThemeColor
      : props.isSubTheme
      ? props.theme.subThemeColor
      : `red`};
  box-shadow: ${(props) => (props.isShadow ? props.theme.boxShadow : ``)};

  transition: 0.5s;

  ${(props) => (props.isHover ? `&:hover {opacity: 0.5;}` : ``)}
`;

const App = () => {
  return (
    <div>
      <Box width={`200px`} height={`200px`}></Box>
      <Box width={`100%`} height={`40px`} isTheme={true} isShadow={true}></Box>
      <Box isSubTheme={true} isHover={true}></Box>
    </div>
  );
};

export default App;
