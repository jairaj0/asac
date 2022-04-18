import Banner from "./Components/Banner/Banner";
import Mint from "./Components/Mint/Mint";
import Nav from "./Components/Nav/Nav";
import Slider from "./Components/Slider/Slider";
import Roadmap from "./Components/Roadmap/Roadmap";
import Team from "./Components/Team/Team";
import Faq from './Components/Faq/Faq';
import Licence from "./Components/Licence/Licence";

function App() {
  return (
    <>
      <Nav />
      <div className="body">
      <Banner />
      <Mint />
      <Slider />
      <Roadmap />
      <Team />
      <Faq />
      <Licence />
      </div>
    </>
  );
}

export default App;
