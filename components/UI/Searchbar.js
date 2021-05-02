import { SearchOutlined } from "@ant-design/icons";
import { AutoComplete, Input } from "antd";
import React from "react";
import styled from "styled-components";
import { getActiveTheme, theme } from "utils/commonFunctions";
const { Option } = AutoComplete;

const options = [
  { label: "one", value: 1 },
  { label: "two", value: 2 },
  { label: "three", value: 3 },
];

const StyledAc = styled(AutoComplete)`
  .ant-input-affix-wrapper > input.ant-input {
    background-color: transparent !important;
  }
  .ant-input-affix-wrapper-lg {
    border: 0px;
    border-radius: 15px;
    background-color: ${theme.colors.cardTrans} !important;
  }
  .ant-input-lg {
    background-color: ${theme.colors.cardTrans} !important;
  }
  .ant-input-prefix {
    color: ${theme.colors.primary};
    font-size: 20px;
    margin-right: 10px;
  }
  .ant-select-selection-search-input {
    height: 45px;
  }
`;

function Searchbar(props) {
  return (
    <StyledAc dropdownMatchSelectWidth={252} style={{ width: 450 }} {...props}>
      <Input
        size="large"
        prefix={<SearchOutlined />}
        placeholder="Find the best your team"
      />
    </StyledAc>
  );
}

export default Searchbar;
