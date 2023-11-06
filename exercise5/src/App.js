import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";



import Swimmer from "./images/Swimmer.png"
import WeddingPhoto from "./images/wedding-photography.png"
import MountainBike from "./images/mountain-bike.png"


function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Card 
      img = {[Swimmer, WeddingPhoto, MountainBike]} 
      rating = {["5.0", "3.5", "5.0"]}
      />
    </div>
  );
}

export default App;
