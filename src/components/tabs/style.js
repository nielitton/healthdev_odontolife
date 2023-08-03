import * as Tabs from "@radix-ui/react-tabs";
import { styled } from "styled-components";

export const TabsTriggerStyle = styled(Tabs.Trigger)`
  height: 35px;
  color: var(--text-color-light);
  background-color: transparent;
  padding: 5px;
  transition: 0.5s;
  &[data-state="active"] {
    color: var(--blue-color);
    box-shadow: inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor;
  }
`;

export const TabsListStyle = styled(Tabs.List)`
  fieldset,
  input {
    all: unset;
  }
  display: flex;
  gap: 10px;
  color: var(--text-color-light);
  :hover {
    color: var(--blue-color);
  }
`;
