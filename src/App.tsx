import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Steps from "./components/Steps";
import useFetchSteps from "./hooks/useFetchSteps";

import "./App.css";

function App() {
  const { steps } = useFetchSteps();

  return (
    <>
      <NavBar />
      <Hero />
      <Steps steps={steps} />
    </>
  );
}

export default App;
