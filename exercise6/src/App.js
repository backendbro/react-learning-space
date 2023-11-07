import Navbar from "./components/Navbar";
import Input from "./components/Input";
import Image from "./components/Image";

function App() {
  return (
    <div className="App">
        <Navbar />
        <div className="display-container">
          <Input />
          <Image />
        </div>
    </div>
  );
}

export default App;
