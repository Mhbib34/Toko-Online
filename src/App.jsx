import Cards from "./components/Fragments/Cards";
import Slider from "./components/Fragments/Slider";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className="md:px-48 px-10">
      <Navbar />
      <Slider />
      <Cards />
    </div>
  );
}

export default App;
