import * as Tabs from "@radix-ui/react-tabs";
import { GeneralDatas } from "../generalDatas";
import { TabsListStyle, TabsTriggerStyle } from "./style";
import { Adress } from "../address";
import { Password } from "../password";
import { ProfessionalDatas } from "../professionalDatas";

const tabs = [{
    id: 1,
    title: "Dados Gerais",
    content: <GeneralDatas />
}, {
    id: 2,
    title: "Endereço",
    content: <Adress />
}, {
    id: 3,
    title: "Senha",
    content: <Password />
}, {
    id: 4,
    title: "Dados profissionais",
    content: <ProfessionalDatas />
}]

const FormTabs = () => (
  <Tabs.Root defaultValue={tabs[0].id}>
    <TabsListStyle>
        { tabs.map((tab) => ( <TabsTriggerStyle value={tab.id} key={tab.id}>{ tab.title }</TabsTriggerStyle> )) }
    </TabsListStyle>
        { tabs.map((tab) => ( <Tabs.Content value={tab.id} key={tab.id}>{ tab.content }</Tabs.Content> )) }
  </Tabs.Root>
);

export { FormTabs };
