//import logo from './logo.svg';
import "./App.css";
import { Grid, makeStyles } from "@material-ui/core";
import TemperatureConverter from "./components/TemperatureConverter";
import TodoList from "./components/todoList";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Grid
        container
        direction="column"
        spacing={4}
        className={classes.container}
      >
        <Grid item>
          <TemperatureConverter />
        </Grid>
        <Grid item>
          <TodoList />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
