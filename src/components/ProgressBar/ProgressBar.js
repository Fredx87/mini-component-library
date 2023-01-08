/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

// This should be random for each instance
const LABEL_ID = "label-id";

const ProgressBar = ({ value, size }) => {
  const Component = sizeComponents[size];
  return (
    <>
      <VisuallyHidden id={LABEL_ID}>Loading: </VisuallyHidden>
      <Component aria-valuenow={value} aria-labelledby={LABEL_ID}>
        <Bar />
      </Component>
    </>
  );
};

const Bar = styled.div`
  height: 100%;
  background-color: ${COLORS.primary};
  border-radius: 4px;
`;

const Base = styled.div.attrs({ role: "progressbar" })`
  width: 100%;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  ${Bar} {
    width: ${(p) => `${p["aria-valuenow"]}%`};
    border-radius: ${(p) =>
      p["aria-valuenow"] >= 99.8 ? "4px" : "4px 0 0 4px"};
  }
`;

const Large = styled(Base)`
  height: 24px;
  border-radius: 8px;
  padding: 4px;
`;

const Medium = styled(Base)`
  height: 12px;
  border-radius: 4px;
`;

const Small = styled(Base)`
  height: 8px;
  border-radius: 4px;
`;

const sizeComponents = {
  large: Large,
  medium: Medium,
  small: Small,
};

export default ProgressBar;
