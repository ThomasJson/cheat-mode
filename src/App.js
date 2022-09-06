import "./App.scss";
import BtnToggle from "./components/btnToggle/BtnToggle";
import Contenu from "./components/contenu/Contenu";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Contenu />
        <BtnToggle />
      </ThemeContextProvider>
    </>
  );
}

export default App;
