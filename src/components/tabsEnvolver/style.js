import { styled } from "styled-components";

export const TabsEnvolverStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 24px;
  gap: 15px;
  .configuration-container {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 16px;
    color: var(--text-color-title);
    font-weight: 500;
  }
  .icon:hover {
    color: var(--blue-color);
  }
`;
