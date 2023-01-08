import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const Wrapper = size === "large" ? LargeWrapper : SmallWrapper;
  const iconSize = size === "large" ? 24 : 16;
  const wrapperWidth = width ? `${width}px` : "revert";

  return (
    <Wrapper style={{"--width": wrapperWidth}}>
      <PositionedIcon id={icon} size={iconSize} />
      <VisuallyHidden>{label}</VisuallyHidden>
      <NativeInput placeholder={placeholder} />
    </Wrapper>
  );
};

const BaseWrapper = styled.label`
  position: relative;
  display: block;
  width: var(--width);
  color: ${COLORS.gray700};

  &:focus-within {
    outline: 2px solid Highlight;
    outline: 2px solid -webkit-focus-ring-color;
    outline-offset: 2px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const SmallWrapper = styled(BaseWrapper)`
  border-bottom: 1px solid ${COLORS.black};
  font-size: 14px;
  padding: 4px 0 4px 24px;
`;

const LargeWrapper = styled(BaseWrapper)`
  border-bottom: 2px solid ${COLORS.black};
  font-size: 18px;
  padding: 6px 0 6px 32px;
`;

const NativeInput = styled.input`
  border: none;
  color: inherit;
  font-size: inherit;
  font-weight: 700;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: initial;
  }
`;

const PositionedIcon = styled(Icon)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: var(--size);
  height: var(--size);
`;

export default IconInput;
