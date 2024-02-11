import Navbar from './Components/Navbar';
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import Reviews from "./Components/Reviews";

import "./App.css"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Reviews/>
      <Footer/>
    </div>
  );
}

export default App;
