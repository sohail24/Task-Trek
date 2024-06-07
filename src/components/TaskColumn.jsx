import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";
import Tag from "./Tag";

const TaskColumn = ({ title, titleIcon, tasks, status, handleDelete }) => {
  console.log(tasks);
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        {titleIcon} {title}
      </h2>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              title={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
            />
          )
      )}
    </section>
  );
};

export default TaskColumn;
