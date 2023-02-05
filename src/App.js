import "./App.css";
import Carousel from "./components/carousel/carousel";
import NavBar from "./components/navbar/navbar";
import AboutMe from "./components/aboutMe/aboutMe";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Carousel></Carousel>
      <AboutMe></AboutMe>
    </>
  );
}

export default App;
