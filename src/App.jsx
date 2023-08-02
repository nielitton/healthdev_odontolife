import "./App.css";
import { SideBar } from "../src/components/sideBar";
import { FormTabs } from "./components/tabs";
import { styled } from "styled-components";
import { NOT_EXPANDED_SIDEBAR_WIDTH } from "./components/sideBar/styled";

const AppContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  height: 100%;
`;

const MainContent = styled.div`
  display: flex;
  width: calc(100% - ${NOT_EXPANDED_SIDEBAR_WIDTH} - 10px);
`;

function App() {
  return (
    <AppContainer>
      <SideBar />
      <MainContent>
        <FormTabs />
      </MainContent>
    </AppContainer>
  );
}

export default App;
