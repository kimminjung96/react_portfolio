import "./App.css";
import Header from "./common/Header";
import Four from "./component/Four";
import MainSection from "./component/MainSection";
import Second from "./component/Second";
import Three from "./component/Three";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Second />
      <Three />
      <Four />
    </div>
  );
}

export default App;
