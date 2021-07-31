import React from "react";
import Balance from "./components/Balance";
import History from "./components/History";
import Form from "./components/Form";

import DataProvider from "./context/DataProvider";
import FlexContainer from "./components/FlexContainer";
import {TitlePrimary} from './components/Typography'

function App() {
  return (
    <FlexContainer direction="column" gap="2rem">
      <DataProvider>
        <TitlePrimary>Expense Tracker</TitlePrimary>
        <Balance />
        <History />
        <Form />
      </DataProvider>
    </FlexContainer>
  );
}

export default App;
