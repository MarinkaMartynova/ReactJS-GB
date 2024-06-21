//
import "./App.css";
import React from "react";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import ThemeToggle from "./Components/ThemeToggle";

const App = () => {
  return (
    <Provider store={store}>
      <ThemedApp />
    </Provider>
  );
};

const ThemedApp = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme === "light" ? "#f1f1f1" : "#333",
        color: theme === "light" ? "#333" : "#f1f1f1",
      }}
    >
      <h1>Активация темы окна браузера</h1>
      <ThemeToggle />
    </div>
  );
};

export default App;
