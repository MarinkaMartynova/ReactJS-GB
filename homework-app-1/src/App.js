import test from "./img/test.png";
import devtools from "./img/react-devtools.png";
import "./App.css";
import "./styles.css";
import Message from "./Components/Message";

function App() {
  return (
    <div className="App">
      <img src={test} alt="screen test" className="screen test" />

      <Message text="Это сообщение от компонента Message!" />
      <Message text="Второе сообщение от компонента Message." />

      <img src={devtools} alt="screen dev" className="devtools" />
    </div>
  );
}

export default App;
