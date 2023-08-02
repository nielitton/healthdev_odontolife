import { styled } from "styled-components";

export const ToolTipContainer = styled.div`
  animation: opacity .2s linear;
  z-index: 15;
  user-select: none;
  will-change: transform, opacity;
  .toolTipContent {
    padding: 6px 8px 8px 8px;
    background-color: var(--tooltip-background);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    .toolTipArrow {
      fill: var(--tooltip-background);
      width: 16px;
      height: 8px;
      flex-shrink: 0;
    }
  }
  @keyframes opacity {
    from {
      opacity: 0%;
    }
    to {
      opacity: 100%;
    }
  }
`;
