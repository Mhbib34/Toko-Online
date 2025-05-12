import Cards from "../components/Fragments/Cards";
import ImageSlider from "../components/Fragments/Slider";
import Navbar from "../components/layout/Navbar";

export default function MainPages() {
  return (
    <div className="md:px-48 px-2">
      <Navbar />
      <ImageSlider />
      <Cards />
    </div>
  );
}
