import * as Tabs from "@radix-ui/react-tabs";
import { FormTab } from "../formTab";
import { TabsTriggerStyle } from "./style";

const tabs = [{
    id: 1,
    title: "Dados Gerais",
    content: <FormTab />
}, {
    id: 2,
    title: "Endereço",
    content: "Endereço"
}, {
    id: 3,
    title: "Senha",
    content: "Senha"
}, {
    id: 4,
    title: "Dados profissionais",
    content: "Dados profissionais"
}]

const FormTabs = () => (
  <Tabs.Root defaultValue={tabs[0].id}>
    <Tabs.List>
        { tabs.map((tab) => ( <TabsTriggerStyle value={tab.id} key={tab.id}>{ tab.title }</TabsTriggerStyle> )) }
    </Tabs.List>
        { tabs.map((tab) => ( <Tabs.Content value={tab.id} key={tab.id}>{ tab.content }</Tabs.Content> )) }
  </Tabs.Root>
);

export { FormTabs };
