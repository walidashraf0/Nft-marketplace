import Details from "./componenets/Details/Details";
import Hero from "./componenets/Hero/Hero";
import Navbar from "./componenets/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <Hero />
        <Details />
      </div>
    </>
  );
}

export default App;
