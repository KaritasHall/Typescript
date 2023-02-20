import "./App.css";
import { Person } from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person
        name="Daisy"
        age={40}
        email="daisymail@mail.com"
        role="designer"
        otherRole="frontend"
      />
    </div>
  );
}

export default App;
