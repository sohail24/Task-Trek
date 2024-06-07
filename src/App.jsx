import React, { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";

const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    //localstorage takes the data in the form of string, if we pass the array tasks directly
    //then it will convert it to string but then again we would not be able to convert the string to array if we want to use it again
    //for that we convert JSON.stringify to convert the array to string, once again we will use another method of JSON covert it back to array.
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTask = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTask);
  };

  //console.log("tasks", tasks);
  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="TO DO"
          titleIcon="🎯"
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="DOING"
          titleIcon="🌟"
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="DONE"
          titleIcon="✅"
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
