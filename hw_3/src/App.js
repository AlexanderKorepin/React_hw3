import "./App.css";
import TemperatureConverter from "./components/TemperatureConverter";
import "./components/TemperatureConverter.css";
import ToDoList from "./components/ToDoList";
import "./components/ToDoList.css";



function App() {
  return (
    <div className="Tasks">
      <div className="FirstTask">
        <TemperatureConverter />
        </div> 
        <div className="SecondTask"> 
          <ToDoList />
        </div>
      
    </div>
  );
}

export default App;