import Form from "./form";
import "./App.css";
import {useThemeContext} from "./context/themeContext";
import SwitchReact from "./components/SwitchReact";

function App() {
  const {theme} = useThemeContext();

  return (
    <div className="App" id={theme}>
      <Form />
      <SwitchReact />
    </div>
  );
}

export default App;
