/* eslint-disable react/prop-types */
import { SearchOutlined } from "@ant-design/icons";
import { Select, Input } from "antd";
import React from "react";
import styled from "styled-components";
import { getActiveTheme, theme } from "utils/commonFunctions";
import { DropArrow } from "./Icons";
const { Option } = Select;

const StyledSelect = styled(Select)`
  color: ${(props) => theme[props.activeTheme].text + " !important"};
`;

function Dropdown(props) {
  console.log("===> ~ Dropdown ~ props", props);
  const activeTheme = getActiveTheme();
  return (
    <StyledSelect
      style={{ width: "100%" }}
      className="dropDownStyle"
      activeTheme={activeTheme}
      dropdownMatchSelectWidth={252}
      {...props}
    >
      {props.children}
    </StyledSelect>
  );
}

export default Dropdown;
