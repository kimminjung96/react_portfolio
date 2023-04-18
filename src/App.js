import "./App.css";
import GlobalStyles from "./common/GlobalStyles";
import Header from "./common/Header";
import Contact from "./component/Contact";
import Skill from "./component/Skill";
import Home from "./component/Home";
import About from "./component/About";
import Project from "./component/Project";

function App() {
  return (
    <div className="App">
      {/* <GlobalStyles /> */}
      <Header />
      <Home />
      <About />
      <Project />
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
