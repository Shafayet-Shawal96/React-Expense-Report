import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";

const ExpenseItem = ({ id, item }) => {
  const [title, setTitle] = useState(item.title);
  // console.log(title);

  // const clickHandler =() =>{
  //   setTitle('Updated');
  // }
  return (
    <Card className="expense-item">
      <ExpenseDate date={item.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{item.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Click</button> */}
    </Card>
  );
};

export default ExpenseItem;
