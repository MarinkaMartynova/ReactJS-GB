// Шаг 1: Инициализация проекта и установка зависимостей
// npm install @reduxjs/toolkit react-redux

// Шаг 5: Работа с компонентом
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./reducers/tasksReducer";

const App = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <h1>Список задач</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.completed ? "Завершено" : "Не завершено"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
