import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onGetExpense }) => {
  const getExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString(),
    };
    onGetExpense(newExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onGetExpense={getExpense} />
    </div>
  );
};

export default NewExpense;
