import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

// Определяется кастомный стиль с помощью makeStyles из Material-UI. Задается стиль для контейнера и карточек.
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

export default function TodoList() {
  const classes = useStyles();
  const [newTask, setNewTask] = useState(""); //новая задача, которую вводит пользователь.
  const [tasks, setTasks] = useState([]); // массив существующих задач.

  // Обработчики событий.
  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className={classes.card}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="h5">Список дел</Typography>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item xs={9}>
            <TextField
              label="Новая задача"
              variant="outlined"
              value={newTask}
              onChange={handleNewTaskChange}
            />
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" onClick={handleAddTask}>
              Добавить
            </Button>
          </Grid>
        </Grid>
        {tasks.map((task, index) => (
          <Grid item key={index}>
            <Card>
              <CardContent>
                <Grid container justify="space-between" alignItems="center">
                  <Grid item>
                    <Typography>{task}</Typography>
                  </Grid>
                  <Grid item>
                    <IconButton
                      color="secondary"
                      onClick={() => handleDeleteTask(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
