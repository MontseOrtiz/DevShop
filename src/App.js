import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./Routes";
import Navbar from "./Components/Navbar";
import { useState } from "react";

function App() {
  const [mostrarList, setMostraList] = useState([]);
  return (
    <Router>
      <Switch>
        <Routes mostrarList={mostrarList} setMostrarList={setMostraList} />
      </Switch>
    </Router>
  );
}

export default App;
