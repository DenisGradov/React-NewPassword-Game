import styles from "./menu.module.css";
import Error from "../Error/Error";
import rules from "../../utils/rules";
import NoError from "../Error/NoError";
import Win from "../Win/Win";
import { useEffect } from "react";
function Menu({
  login,
  setLogin,
  password,
  setPassword,
  error,
  setError,
  noError,
  setNoError,
  win,
  setWin,
}) {
  function registration(e) {
    e.preventDefault();
    let newNoError = [];
    let newError = false;
    setNoError(newNoError);
    if (!!!login || !!!password) {
      let input = document.getElementsByName("login")[0];
      !!!e.target.login.value
        ? input.classList.add("error")
        : input.classList.remove("error");
      input = document.getElementsByName("password")[0];
      !!!e.target.password.value
        ? input.classList.add("error")
        : input.classList.remove("error");
    } else {
      for (let i in rules) {
        if (!rules[i].check(password)) {
          setError({ i, title: rules[i].title });
          newError = true;
          let input = document.getElementsByName("password")[0];
          input.classList.add("error");
          let errorBox = document.querySelector("#error");
          errorBox.classList.add(styles.animation);
          let timer = setTimeout(() => {
            errorBox.classList.remove(styles.animation);
          }, 1000);
          break;
        } else {
          newNoError.push({ i, title: rules[i].title });
          setNoError(newNoError);
        }
      }
    }
    if (!newError) {
      setError(false);
      setWin(true);
    }
  }
  function updateValue(e) {
    e.target.name == "login"
      ? setLogin(e.target.value)
      : setPassword(e.target.value);

    let input = document.getElementsByName(e.target.name)[0];
    input.classList.remove("error");
  }
  console.log(noError);
  return (
    <div className={styles.block}>
      {!win && (
        <form onSubmit={(e) => registration(e)}>
          <h2 className={styles.text}>Введите логин:</h2>
          <input
            onChange={(e) => updateValue(e)}
            defaultValue={login}
            placeholder="login"
            name="login"
            type="text"
            className={styles.input}
          />
          <h2 className={styles.text}>Введите пароль:</h2>
          <input
            onChange={(e) => updateValue(e)}
            defaultValue={password}
            placeholder="password"
            name="password"
            type="text"
            className={styles.input}
          />
          <button className={styles.button} onSubmit={(e) => registration(e)}>
            Зарегистрироваться
          </button>
          <div id="error">{!!error && <Error error={error} />}</div>
          <div id="noError">
            {noError.length > 0 && <NoError noError={noError} />}
          </div>
        </form>
      )}
      {win && <Win />}
    </div>
  );
}

export default Menu;
