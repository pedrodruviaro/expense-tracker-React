import React, { useContext } from "react";
import { useState } from "react";
import { ValuesContext } from "../../context/DataProvider";
import FlexContainer from "../FlexContainer";
import { TitleSecondary } from "../Typography";
import { Button, Input, Label } from "./styles";

export default function Index() {
  const [expenses, setExpenses] = useContext(ValuesContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newExpense = { amount: amount, title: title };

    setExpenses([...expenses, newExpense]);

    setTitle("");
    setAmount(0);
  }

  return (
    <FlexContainer direction="column">
      <TitleSecondary align="left">Add new Transition</TitleSecondary>

      <form onSubmit={handleSubmit}>
        <Label>
          Text
          <Input
            type="text"
            placeholder="Enter text..."
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Label>

        <Label style={{ display: "block" }}>
          Amount (negative - expense, positive - income)
          <Input
            type="number"
            placeholder="Enter amount"
            step="0.5"
            onChange={(e) => setAmount(+e.target.value)}
          />
        </Label>

        <Button type="submit">Add Transaction</Button>
      </form>
    </FlexContainer>
  );
}
