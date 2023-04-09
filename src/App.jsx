import { Outlet } from "react-router-dom";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Outlet />
    </div>
  );
}

export default App;
