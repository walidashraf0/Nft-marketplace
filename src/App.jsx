import Details from "./componenets/Details/Details";
import Hero from "./componenets/Hero/Hero";
import Navbar from "./componenets/Navbar/Navbar";
import Statistics from "./componenets/Statistics/Statistics";

function App() {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <Hero />
        <Details />
        <Statistics />
      </div>
    </>
  );
}

export default App;
