import Styles from "./Components/App.module.css";
import Infomation from "./Components/Infomacoes/Index";

function App() {
  return (
    <div className={Styles.Container}>
      <div className={Styles.Box}></div>
      <Infomation />
    </div>
  );
}

export default App;
