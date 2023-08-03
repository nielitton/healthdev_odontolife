import { useState } from "react";
import {
  SwitchContainerStyle,
  SwitchRootStyle,
  SwitchThumbStyle,
} from "./style";

const Switch = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <SwitchContainerStyle>
        <SwitchRootStyle onCheckedChange={() => setIsChecked(!isChecked)}>
          <SwitchThumbStyle />
        </SwitchRootStyle>
      {isChecked ? <p>Inativo</p> : <p>Ativo</p>}
    </SwitchContainerStyle>
  );
};

export { Switch };
