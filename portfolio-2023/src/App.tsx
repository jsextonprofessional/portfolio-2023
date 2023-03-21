import { MarqueeBG } from "./components/marquee-bg/Index";
import { BodyContainer } from "./components/body-container/Index";
import "./App.css";

function App() {
  return (
    <div className="bg-purple-500 min-h-screen">
      <MarqueeBG />
      <BodyContainer />
    </div>
  );
}

export default App;
