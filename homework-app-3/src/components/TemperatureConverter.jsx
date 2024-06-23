import React, { useState } from "react";
import { TextField, Grid, Typography, makeStyles } from "@material-ui/core";

// Определяется кастомный стиль с помощью makeStyles из Material-UI.Задается стиль для контейнера и карточек.
const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
  },
  card: {
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
  },
}));

export default function TemperatureConverter() {
  const classes = useStyles();
  const [celsius, setCelsius] = useState(""); //значение температуры в градусах Цельсия.
  const [fahrenheit, setFahrenheit] = useState(""); // значение температуры в градусах Фаренгейта.

  // Обработчик изменения значения температуры в градусах Цельсия.
  const handleCelsiusChange = (event) => {
    const value = event.target.value;
    setCelsius(value);
    setFahrenheit(((value * 9) / 5 + 32).toFixed(2));
  };

  // Обработчик изменения значения температуры в градусах Фаренгейта.
  const handleFahrenheitChange = (event) => {
    const value = event.target.value;
    setFahrenheit(value);
    setCelsius((((value - 32) * 5) / 9).toFixed(2));
  };

  return (
    <div className={classes.card}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="h5">Конвертер температуры</Typography>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Градусы Цельсия"
              variant="outlined"
              value={celsius}
              onChange={handleCelsiusChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Градусы Фаренгейта"
              variant="outlined"
              value={fahrenheit}
              onChange={handleFahrenheitChange}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
