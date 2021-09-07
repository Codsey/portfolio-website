import "./App.css";
import Features from "./Sections/Features/Features.component";
import Header from "./components/Header/Header.component";
import Home from "./Sections/Home/Home.component";
import Portfolio from "./Sections/Portfolio/Portfolio.component";
import Blog from "./Sections/Blogs/Blogs.component";
import Contact from "./Sections/Contact/Contact.component";
import Footer from "./components/Footer/Footer.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
