import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Addtask from "./Components/Addtask";
import ListTask from "./Components/ListTask";

function App() {
  return (
    <div className="App">
      <div className="todoApp">
      <Addtask />
      <ListTask />
      </div>
    </div>
  );
}

export default App;
