import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import React, { useState } from 'react';
import AddTodoItem from "./MyComponents/AddTodoItem";

function App() {
  const [todoList, setTodoList] = useState([{
    SNo: 1,
    name: "Complete IPSF form",
    desp: "Complete IPSF form by 5th Junuary otherwise your will deduct accordingly"
  }, {
    SNo: 2,
    name: "Do investments",
    desp: "Do investment in order to decrese taxable income under 5 lakh to avoid tax deduction"
  }, {
    SNo: 3,
    name: "New Year Resolutions",
    desp: "List down new year resolutions and follow strictly"
  }]);

  const [sNO, setSNo] = useState(4);

  const onDelete = (todoItem) => {
    console.log("please delete todo item : ",todoItem.name);

    setTodoList(todoList.filter(e => {
      return e !== todoItem;
    }))
  };

  const onAddTodoItem = (todoItem) => {
    todoItem.SNo = sNO;
    todoList.push(todoItem);
    setTodoList(todoList);
    setSNo(sNO+1);
  }
  
  return (
    <div className="App">
      <Header title="My TodoList" searchBar={false} />
      <AddTodoItem className= "my-3" onAddTodoItem = {onAddTodoItem}/>
      <Todos todoList={todoList} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
