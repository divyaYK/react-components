import styled from "styled-components";

export const StyledIcon = styled.div`
  display: flex;

  & svg {
    display: inline-block;
    shape-rendering: inherit;
    vertical-align: middle;

    path: {
      fill: currentColor;
    }
  }
`;
