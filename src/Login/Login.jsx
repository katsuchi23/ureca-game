import style from "./Login.module.css";
import { useState } from "react";


function Login(){

    const [name, setName] = useState(null)

    function buttonenter(){
        const input = document.getElementById("input").value.toString();
        setName(name => input);
        if (input){
            window.location.href = "/level1";
        }
        else{
            alert("Please enter your name")
        }
    }

    return(
        <>
            <div className={style.background}>
                <p className={style.title}>Fraction !!!</p>
                <input type="text" className={style.input} id = "input" placeholder="Enter your name" autoComplete="off"/>
                <button className={style.button} onClick = {buttonenter}>Enter</button>
            </div>
        </>
    )
}

export default Login;