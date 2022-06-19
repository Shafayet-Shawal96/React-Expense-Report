import ExpenseItem from "./components/Expenses/ExpenseItem";
import ExpenseChart from "./components/Expenses/ExpenseChart";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const dummy = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: "94.12",
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: "799.49", date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: "294.67",
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: "450",
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummy);

  const getExpense = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onGetExpense={getExpense} />
      <ExpenseChart />
      <Card className="expenses">
        {expenses.map((item) => (
          <ExpenseItem key={item.id} item={item} />
        ))}
      </Card>
    </div>
  );
};

export default App;
