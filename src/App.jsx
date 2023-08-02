import "./App.css";
import { SideBar } from "../src/components/sideBar";
import { FormTabs } from "./components/tabs";
import { styled } from "styled-components";
import { NOT_EXPANDED_SIDEBAR_WIDTH } from "./components/sideBar/styled";
import { Header } from "./components/header";

const AppContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  height: 100%;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - ${NOT_EXPANDED_SIDEBAR_WIDTH});
`;

function App() {
  return (
    <AppContainer>
      <SideBar />
      <MainContent>
        <Header />
        <FormTabs />
      </MainContent>
    </AppContainer>
  );
}

export default App;
