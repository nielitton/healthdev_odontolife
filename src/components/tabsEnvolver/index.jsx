import { FormTabs } from "../tabs";
import { HiMiniArrowLongLeft } from "react-icons/hi2";
import { TabsEnvolverStyle } from "./style";
import { Tooltip } from "../tooltip";

const TabsEnvolver = () => {
  return (
    <TabsEnvolverStyle>
      <div className="configuration-container">
        <Tooltip label="Voltar" side="bottom">
          <HiMiniArrowLongLeft className="icon" />
        </Tooltip>
        <p className="configuration-text">Configurações de perfil</p>
      </div>
      <FormTabs />
    </TabsEnvolverStyle>
  );
};

export { TabsEnvolver };
