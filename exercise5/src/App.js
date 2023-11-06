import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Swimmer from "./images/Swimmer.png"

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Card img = {Swimmer}/>
    </div>
  );
}

export default App;
