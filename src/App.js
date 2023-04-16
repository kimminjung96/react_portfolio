import "./App.css";
import GlobalStyles from "./common/GlobalStyles";
import Header from "./common/Header";
import Contact from "./component/Contact";
import Four from "./component/Four";
import MainSection from "./component/MainSection";
import Second from "./component/Second";
import Three from "./component/Three";

function App() {
  return (
    <div className="App">
      {/* <GlobalStyles /> */}
      <Header />
      <MainSection />
      <Second />
      <Three />
      <Four />
      <Contact />
    </div>
  );
}

export default App;
