import { useState } from "react";
import { evaluate } from "mathjs";
import "./Calculatorstyle.css";
function Calculator() {
  let [result, setresult] = useState("");
  let [dot, setdot] = useState(false);
  let eventClicker = ["+", "/", "-", "*"];

  function checksymbol(symbol) {
    if (symbol === "×") return "*";
    if (symbol === "÷") return "/";
    return symbol;
  }

  function replaceNumber(e) {
    let input = checksymbol(e.target.innerText);
    if (result === "" && eventClicker.includes(input)) {
      return;
    }

    if (input === ".") {
      if (dot === true) return;
      else setdot(true);
    }

    if (eventClicker.includes(input)) {
      setdot(false);
    }
    setresult(result + input);
  }

  function clearResult() {
    setresult("");
    setdot(false);
  }

  function deleteResult() {
    if (result.endsWith(".")) {
      setdot(false);
    }
    setresult(result.slice(0, -1));
  }

  function jameResult() {
    if (result) {
      setresult(String(evaluate(result)));
      setdot(false);
    } else return alert("pls enter someting!");
  }

  return (
    <div className="container">
      <div className="screen">{result}</div>
      <div className="buttons">
        <button onClick={clearResult} className="clicker">
          Clear
        </button>
        <button onClick={deleteResult} className="clicker">
          <i class="fa-solid fa-delete-left"></i>
        </button>
        <button onClick={replaceNumber} className="clicker">
          ÷
        </button>
        <button onClick={replaceNumber}>7</button>
        <button onClick={replaceNumber}>8</button>
        <button onClick={replaceNumber}>9</button>
        <button onClick={replaceNumber} className="clicker">
          ×
        </button>
        <button onClick={replaceNumber}>4</button>
        <button onClick={replaceNumber}>5</button>
        <button onClick={replaceNumber}>6</button>
        <button onClick={replaceNumber} className="clicker">
          -
        </button>
        <button onClick={replaceNumber}>1</button>
        <button onClick={replaceNumber}>2</button>
        <button onClick={replaceNumber}>3</button>
        <button onClick={replaceNumber} className="clicker">
          +
        </button>
        <button onClick={replaceNumber}>0</button>
        <button onClick={replaceNumber}>.</button>
        <button onClick={jameResult} className="clicker">
          =
        </button>
      </div>
    </div>
  );
}
export default Calculator;
