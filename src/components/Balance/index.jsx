import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ValuesContext } from "../../context/DataProvider";
import FlexContainer from '../FlexContainer'
import {Paragraph, TitleSecondary, TitleTerciary} from '../Typography'
import { ValuesContainer } from "./styles";

export default function Index() {
  const [expenses] = useContext(ValuesContext);

  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    let updatedBalance = 0;
    let updatedIncome = 0;
    let updatedExpense = 0;

    expenses.forEach(
      (expense) => (updatedBalance = updatedBalance + expense.amount)
    );

    expenses.forEach(expense => (
      expense.amount > 0 ? updatedIncome = updatedIncome + expense.amount : null
    ))

    expenses.forEach(expense => (
      expense.amount < 0 ? updatedExpense = updatedExpense + expense.amount : null
    ))

    console.log(`usei effect`);

    setBalance(updatedBalance);
    setIncome(updatedIncome)
    setExpense(updatedExpense * -1)

  }, [expenses]);

  return (
    <FlexContainer direction="column">
      <TitleSecondary align="left">Your Balance</TitleSecondary>
      <Paragraph size="1.75rem" weight="700" margin="1rem 0">$ {balance}</Paragraph>

      <ValuesContainer>
        <div>
          <TitleTerciary transform="uppercase" margin="0 0 .5rem 0">Income</TitleTerciary>
          <Paragraph weight="600" color="#00c700">$ {income.toFixed(2)}</Paragraph>
        </div>

        <div>
          <TitleTerciary transform="uppercase" margin="0 0 .5rem 0">Expense</TitleTerciary>
          <Paragraph weight="600" color="#cf0000">$ {expense.toFixed(2)}</Paragraph>
        </div>
      </ValuesContainer>
    </FlexContainer>
  );
}
