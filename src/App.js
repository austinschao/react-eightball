import logo from "./logo.svg";
import "./App.css";
import EightBall from "./EightBall";
import messages from "./messages";

function App() {
  return (
    <div>
      <EightBall answers={messages} />
    </div>
  );
}

export default App;
