import Styles from "./Components/App.module.css";
import Infomation from "./Components/Infomacoes/Index";
import Profile from "./Components/Motorista/Index";

function App() {
  return (
    <div className={Styles.Container}>
      <div className={Styles.Box}></div>
      <Infomation />
      <Profile />
    </div>
  );
}

export default App;
