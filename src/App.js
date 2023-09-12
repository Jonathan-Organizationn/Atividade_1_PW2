import Styles from "./Components/App.module.css";
import ChatMessages from "./Components/Chat/Index";
import Infomation from "./Components/Infomacoes/Index";
import InputText from "./Components/Input/Index";
import Profile from "./Components/Motorista/Index";

function App() {
  return (
    <div className={Styles.Container}>
      <div className={Styles.Box}></div>
      <Infomation />
      <Profile />
      <InputText />
      <ChatMessages />
    </div>
  );
}

export default App;
