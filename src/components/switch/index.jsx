import { useState } from "react";
import {
  SwitchContainerStyle,
  SwitchRootStyle,
  SwitchThumbStyle,
} from "./style";

const Switch = ({ field }) => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <SwitchContainerStyle >
        <SwitchRootStyle {...field} defaultChecked={true} onCheckedChange={() => setIsChecked(!isChecked)}>
          <SwitchThumbStyle />
        </SwitchRootStyle>
      {isChecked ? <p>Ativo</p> : <p>Inativo</p>}
    </SwitchContainerStyle>
  );
};

export { Switch };
