import * as RadixTooltip from "@radix-ui/react-tooltip";
import { ToolTipContainer } from "./style";

function Tooltip({ children, label, side }) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root delayDuration={300}>
        <RadixTooltip.Trigger>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <ToolTipContainer>
            <RadixTooltip.Content
              className="toolTipContent"
              sideOffset={3}
              side={side}
            >
              <RadixTooltip.Arrow className="toolTipArrow" />
              {label}
            </RadixTooltip.Content>
          </ToolTipContainer>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}

export { Tooltip };
