import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store";

// Создаем компонент, который отвечает за переключение темы.
const ThemeToggle = () => {
  const dispatch = useDispatch(); //получение функции dispatch() из хранилища Redux.
  const theme = useSelector((state) => state.theme.theme);
  const [isHovered, setIsHovered] = useState(false); // Создаем состояние isHovered с помощью useState(), чтобы отслеживать, когда курсор мыши наведен на кнопку.

  // Определяем функцию, которая вызывает dispatch(toggleTheme()) для изменения темы в хранилище Redux.
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  // Определяем функции, которые отслеживают наведение курсора мыши на кнопку.
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // рендерим кнопку с применением стилей, зависящих от текущей темы и состояния isHovered.
  return (
    <div>
      <button
        onClick={handleToggleTheme}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          display: "block",
          margin: "20px auto",
          padding: "10px 20px",
          backgroundColor: isHovered
            ? "#d4d4d4"
            : theme === "light"
            ? "#f1f1f1"
            : "#333",
          color: isHovered
            ? theme === "light"
              ? "#333"
              : "#f1f1f1"
            : theme === "light"
            ? "#333"
            : "#f1f1f1",
          border: `2px solid ${theme === "light" ? "#333" : "#f1f1f1"}`,
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Активировать {theme === "light" ? "темную" : "светлую"} тему
      </button>
    </div>
  );
};

export default ThemeToggle;
