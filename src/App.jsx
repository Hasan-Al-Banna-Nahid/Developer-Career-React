import { Outlet } from "react-router-dom";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import FeaturedJobs from "./Components/FeaturedJobs/FeaturedJobs";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import TopJobs from "./Components/Topjobs/TopJobs";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <TopJobs />
      <FeaturedJobs />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
