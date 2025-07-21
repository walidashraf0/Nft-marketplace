import Details from "./componenets/Details/Details";
import Discover from "./componenets/Discover/Discover";
import Features from "./componenets/Features/Features";
import Hero from "./componenets/Hero/Hero";
import Navbar from "./componenets/Navbar/Navbar";
import Profiles from "./componenets/Profiles/Profiles";
import Statistics from "./componenets/Statistics/Statistics";

function App() {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <Hero />
        <Details />
        <Statistics />
        <Features />
        <Profiles />
        <Discover />
      </div>
    </>
  );
}

export default App;
