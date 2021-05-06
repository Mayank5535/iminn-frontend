import React from "react";
import { Input } from "antd";
import styled from "styled-components";
import { getActiveTheme, theme } from "utils/commonFunctions";

const StyledInput = styled(Input)`
  background-color: ${theme.colors.cardTrans + " !important"};
  color: ${(props) => theme[props.activeTheme].text + " !important"};
  border-radius: 10px !important;
  cursor: pointer !important;
  & > input.ant-input {
    padding: 0;
    background-color: transparent !important;
    color: ${(props) => theme[props.activeTheme].text + " !important"};
  }
  .ant-input {
    &[disabled] {
      cursor: default;
    }
    &-prefix {
      font-size: 20px;
      margin-right: 1rem;
      color: ${theme.colors.primary};
    }
    &-suffix {
      font-size: 20px;
      color: ${theme.colors.primary};
    }
  }
`;

function TextInput(props) {
  const activeTheme = getActiveTheme();
  return (
    <StyledInput
      bordered={false}
      size="large"
      activeTheme={activeTheme}
      {...props}
    />
  );
}

export default TextInput;
