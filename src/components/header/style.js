import { styled } from "styled-components";

export const HeaderStyle = styled.header`
  height: 70px;
  background-color: white;
  width: 100%;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 32px;
  .path-page {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .blue {
    color: var(--blue-color);
    font-weight: 500;
  }
  .text-title {
    color: var(--text-color-title);
  }
  .right-infos {
    display: flex;
    align-items: center;
    gap: 49px;
  }
  .icons-container {
    display: flex;
    gap: 32px;
    .icon {
      font-size: 18px;
      color: var(--text-color-light);
      width: 30px;
      height: 30px;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    :hover {
      background-color: var(--border-color);
      color: var(--blue-color);
      border-radius: 50%;
    }
  }
`;
