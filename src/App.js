import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";

function App() {
  //Данные юзера
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  //Есть ли ошибка
  const [error, setError] = useState(false);
  //Массив условий без ошибок
  const [noError, setNoError] = useState([]);
  //Победил ли игрок
  const [win, setWin] = useState(false);
  return (
    <div className="App">
      <h1 className="main-title">NewPassword Game</h1>
      <div className="main-block">
        <Menu
          login={login}
          setLogin={setLogin}
          password={password}
          setPassword={setPassword}
          error={error}
          setError={setError}
          noError={noError}
          setNoError={setNoError}
          win={win}
          setWin={setWin}
        />
      </div>
    </div>
  );
}

export default App;
