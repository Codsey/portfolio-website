import "./App.css";
import Features from "./Sections/Features/Features.component";
import Header from "./components/Header/Header.component";
import Home from "./Sections/Home/Home.component";
import Portfolio from "./Sections/Portfolio/Portfolio.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Features />
      <Portfolio />
    </div>
  );
}

export default App;
