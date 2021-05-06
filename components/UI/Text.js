import React from "react";
import styled from "styled-components";
import { getActiveTheme, theme } from "utils/commonFunctions";

const Text = styled.span`
  font-size: ${(props) =>
    (props.h1 && "64px") ||
    (props.h2 && "30px") ||
    (props.h3 && "24px") ||
    (props.h4 && "20px") ||
    (props.h4 && "18px") ||
    (props.footnote && "13px") ||
    "16px"};
  color: ${(props) =>
    (props.primary && theme.colors.primary) ||
    (props.secondary && theme[getActiveTheme()].secondaryText) ||
    (props.white && theme.colors.white) ||
    theme[getActiveTheme()].text};
  font-weight: ${(props) =>
    (props.bold && "bold") ||
    (props.semiBold && "600") ||
    (props.light && "400") ||
    props?.weight ||
    "inherit"};
  line-height: ${(props) =>
    (props.h1 && "64px") || (props.h2 && "30px") || "inherit"};
`;

export default Text;
