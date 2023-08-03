import * as RadixSwitch from "@radix-ui/react-switch";
import { styled } from "styled-components";

export const SwitchRootStyle = styled(RadixSwitch.Root)`
  all: unset;
  width: 42px;
  height: 25px;
  background-color: var(--unchecked-select);
  border-radius: 9999px;
  position: relative;
  box-shadow: 0px 2px 10px white;
  &:focus {
    box-shadow: 0px, 0px, 0px, 2px black;
  }
  &[data-state="checked"] {
    background-color: var(--blue-color);
  }
`;

export const SwitchThumbStyle = styled(RadixSwitch.Thumb)`
  display: block;
  width: 21px;
  height: 21px;
  background-color: white;
  border-radius: 9999px;
  transition: transform 100ms linear;
  transform: translateX(2px);
  will-change: transform;
  &[data-state="checked"] {
    transform: translateX(19px);
  }
`;
