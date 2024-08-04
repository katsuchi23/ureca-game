import style from "./Login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState(null);
  const navigate = useNavigate();  // Initialize useNavigate hook

  function buttonenter() {
    const input = document.getElementById("input").value.toString();
    setName(name => input);
    if (input) {
      navigate("/level1");  // Use navigate for routing
    } else {
      alert("Please enter your name");
    }
  }

  return (
    <>
      <div className={style.background}>
        <p className={style.title}>Fraction !!!</p>
        <input
          type="text"
          className={style.input}
          id="input"
          placeholder="Enter your name"
          autoComplete="off"
        />
        <button className={style.button} onClick={buttonenter}>Enter</button>
      </div>
    </>
  );
}

export default Login;
