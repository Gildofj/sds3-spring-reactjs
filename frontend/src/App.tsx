import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/Navbar";
import { Routes } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
