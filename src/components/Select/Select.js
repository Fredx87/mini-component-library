import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const CHEVRON_SIZE = 24;

const Select = ({ value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <CurrentValue>{displayedValue}</CurrentValue>
      <Chevron id="chevron-down" size={CHEVRON_SIZE} strokeWidth={2} />
      <select value={value} onChange={onChange}>
        {children}
      </select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border-radius: 8px;
  position: relative;
  width: max-content;
  padding: 12px 52px 12px 16px;

  &:focus-within {
    outline: auto Highlight;
    outline: auto -webkit-focus-ring-color;
  }

  &:hover {
    color: ${COLORS.black};
  }

  select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    appearance: none;
  }
`;

const CurrentValue = styled.span`
  font-size: 1rem;
  line-height: ${18.75 / 16}rem;
`;

const Chevron = styled(Icon)`
  position: absolute;
  top: calc(50% - (var(--size) / 2));
  right: 16px;
`;

export default Select;
