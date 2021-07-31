import React, { useContext } from "react";
import { ValuesContext } from "../../context/DataProvider";
import FlexContainer from "../FlexContainer";
import { TitleSecondary } from "../Typography";
import { HistoryItem, HistoryList } from "./styles";

export default function Index() {
  const [expenses] = useContext(ValuesContext);

  return (
    <FlexContainer direction="column">
      <TitleSecondary align="left">History</TitleSecondary>
      <HistoryList>
        {expenses.map((expense, i) => (
          <HistoryItem
            key={i}
            className={expense.amount > 0 ? "positive" : "negative"}
          >
            <span>{expense.title}</span>
            <span>{expense.amount.toFixed(2)}</span>
          </HistoryItem>
        ))}
      </HistoryList>
    </FlexContainer>
  );
}
