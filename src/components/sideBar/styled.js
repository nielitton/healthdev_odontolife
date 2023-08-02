import { styled } from "styled-components";

export const NOT_EXPANDED_SIDEBAR_WIDTH = "64px";

export const SideBarStyled = styled.aside`
  position: absolute;
  transition: width 0.5s;
  background-color: white;
  z-index: 15;
  display: flex;
  left: 0;
  top: 0;
  flex-direction: column;
  gap: 12px;
  width: ${({ isExpanded }) =>
    isExpanded ? "290px" : NOT_EXPANDED_SIDEBAR_WIDTH};
  height: 100%;
  border-right: 1px solid var(--border-color);
  .chat-container {
    position: absolute;
    bottom: 92px;
    left: 16px;
  }
  .title-nav {
    width: 80%;
    .tools-text {
      margin-left: 18px;
    }
    .tools-off {
      color: white;
    }
    .line {
      margin-left: 18px;
      margin-top: 16px;
      width: 24px;
      height: 1px;
      background-color: var(--border-color);
    }
  }
  .text-title {
    position: fixed;
    top: 28px;
  }
  .text-profission {
    position: absolute;
    top: 50px;
  }
  .ellipse-blue {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 85px;
    transform: translate(50%);
  }
  .profile-container {
    margin-top: 32px;
    margin-left: 15px;
    display: flex;
    align-items: center;
    width: 100%;
    text-align: left;
    max-height: 33px;
    .text-profission {
      font-size: 13px;
    }
    .image-infos-container {
      display: flex;
      margin-right: 100px;
      gap: 16px;
    }
    .coolicon {
      position: fixed;
      left: 250px;
      top: 50px;
      width: 12px;
      cursor: pointer;
      transition: width 3s;
    }
  }
`;

export const ListOfItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .firstItem:hover {
    background-color: var(--blue-color-most-transparent);
  }
  .another-item:hover {
    background-color: var(--border-color);
  }
`;

export const NavItemStyle = styled.li`
  font-size: 16px;
  position: relative;
  margin-left: 15px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 32px;
  width: ${({ isExpanded }) => (isExpanded ? "248px" : "32px")};
  padding: 6px;
  border-radius: 2px;
  background-color: ${({ firstItem }) =>
    firstItem ? "var(--blue-color-transparent)" : ""};
  color: ${({ firstItem }) =>
    firstItem ? "var(--blue-color)" : "var(--text-color-light)"};
  .icon {
    cursor: default;
    color: ${({ firstItem }) =>
      firstItem ? "var(--blue-color)" : "var(--text-color-light)"};
    font-size: 16px;
  }
  .description-nav {
    position: absolute;
    left: 30px;
    top: 3px;
  }
`;
