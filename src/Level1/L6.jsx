import style from './Level1.module.css';
import { useState , useEffect, useRef } from 'react';
import correct_sound from '../assets/correct.wav';
import wrong_sound from '../assets/wrong.mp3';

function L61(){

    function playaudio(str){
        const audio = new Audio(str);
        audio.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    }


    function getRandomImage() {
        // Generate random values for b (between 2 and 12)
        // Generate a random number 'a' between 2 and 12
    const a = Math.floor(Math.random() * 11) + 2;

    const minB = a + 1;

    // Generate 'b' as a random number between minB and 12, capped at 12
    const b = Math.floor(Math.random() * (13 - minB)) + minB;
    const sign = Math.random() < 0.5 ? '+' : '-';

        return [a,b,sign];
    }

    const [d1, setD1] = useState();
    const [d2, setD2] = useState();
    const [d3, setD3] = useState();
    const [n1, setN1] = useState();
    const [n2, setN2] = useState();
    const [n3, setN3] = useState();
    const [score, setScore] = useState(0);
    const [sign, setSign] = useState(0);

    useEffect(() => {
        // Generate the image path as soon as the component is mounted
        setScore(0);
        updateImage();
    }, []);

    function updateImage() {
        try {
            const rendering = getRandomImage();
            setD1(rendering[0]);
            setD2(rendering[1]);
            setD3(rendering[0] * rendering[1]);
            setN1(1);
            setN2(1);
            setSign(rendering[2]);

            const denominator1 = document.getElementById("d1");
            const denominator2 = document.getElementById("d2");
            const denominator3 = document.getElementById("d3");
            denominator1.value = rendering[0];
            denominator2.value = rendering[1];
            denominator3.value = rendering[0] * rendering[1];

            const numerator1 = document.getElementById("n1");
            numerator1.value = 1;
            const numerator2 = document.getElementById("n2");
            numerator2.value = 1;

        } catch (error) {
            console.error("Image not found:", error);
        }
    }

    function answer(){
        if (sign === "+") return (d1 + d2);
        else return (d2 - d1);
    }

    function check(){

        const ans = parseInt(document.getElementById("n3").value);
        console.log(answer());

        if (ans === answer()){
            setScore(s => s + 1)
            playaudio(correct_sound);
            updateImage();
            
        }
        else{
            playaudio(wrong_sound);
            alert("Remember to equalize the denominator first")
        }

        if (score === 24 && ans === answer()){
            const win = document.getElementById("gamewin")
            win.style.display = "flex";
        }
    }   
    

    return(
    <>
        <div className={style.background3}>
            <div className= {style.firstrow}>
                <p className= {style.score}>Score: {score}</p>
            </div>
            <div className= {style.secondrow}>
                <div className= {style.fraction}>
                    <input type="text" className= {style.input} id = "n1" autocomplete="off"/>
                    <hr />
                    <input type="text" className= {style.input} id = "d1" autocomplete="off"/>
                </div>
                <p>{sign}</p>
                <div className= {style.fraction}>
                    <input type="text" className= {style.input} id = "n2" autocomplete="off"/>
                    <hr />
                    <input type="text" className= {style.input} id = "d2" autocomplete="off"/>
                </div>
                <p>=</p>
                <div className= {style.fraction}>
                    <input type="text" className= {style.input} id = "n3" autocomplete="off" placeholder = "?"/>
                    <hr />
                    <input type="text" className= {style.input} id = "d3" autocomplete="off"/>
                </div>
            </div>
            <div className={style.thirdrow}>
                <a href = '/URECA/level6'><button className= {style.button}>Home</button></a>
                <button onClick={check} className={style.button}>Enter</button>
            </div>
            <div className= {style.gamewin} id = "gamewin">
                <p className= {style.score}>Winner!!</p>
                <div className={style.secondbutton}>
                    <a href = '/URECA/6-1'><button className= {style.button}>Retry</button></a>
                    <a href = '/URECA/6-2'><button className={style.button}>Next</button></a>
            </div>
            </div>
        </div>
    </>
    )
}


function L62(){

    function playaudio(str){
        const audio = new Audio(str);
        audio.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    }


    function getRandomImage() {
        // Generate random values for b (between 2 and 12)
        // Generate a random number 'a' between 2 and 12
    const a = Math.floor(Math.random() * 11) + 2;

    const minB = a + 1;

    // Generate 'b' as a random number between minB and 12, capped at 12
    const b = Math.floor(Math.random() * (13 - minB)) + minB;

    const num1 = Math.floor(Math.random() * 11) + 2;
    const maxNum2 = num1 * (b / a);
    const num2 = Math.max(1, Math.floor(Math.random() * Math.floor(maxNum2) + 1));
    const sign = Math.random() < 0.5 ? '+' : '-';

        return [a,b,num1,num2,sign];
    }

    const [d1, setD1] = useState();
    const [d2, setD2] = useState();
    const [d3, setD3] = useState();
    const [n1, setN1] = useState();
    const [n2, setN2] = useState();
    const [n3, setN3] = useState();
    const [score, setScore] = useState(0);
    const [sign, setSign] = useState(0);

    useEffect(() => {
        // Generate the image path as soon as the component is mounted
        setScore(0);
        updateImage();
    }, []);

    function updateImage() {
        try {
            const rendering = getRandomImage();
            setD1(rendering[0]);
            setD2(rendering[1]);
            setD3(rendering[0] * rendering[1]);
            setN1(rendering[2]);
            setN2(rendering[3]);
            setSign(rendering[4]);

            const denominator1 = document.getElementById("d1");
            const denominator2 = document.getElementById("d2");
            const denominator3 = document.getElementById("d3");
            denominator1.value = rendering[0];
            denominator2.value = rendering[1];
            denominator3.value = rendering[0] * rendering[1];

            const numerator1 = document.getElementById("n1");
            numerator1.value = rendering[2];
            const numerator2 = document.getElementById("n2");
            numerator2.value = rendering[3];

        } catch (error) {
            console.error("Image not found:", error);
        }
    }

    function answer(){
        if (sign === "+") return (d1*n2 + d2*n1);
        else return (d2*n1 - d1*n2);
    }

    function check(){

        const ans = parseInt(document.getElementById("n3").value);
        console.log(answer());

        if (ans === answer()){
            setScore(s => s + 1)
            playaudio(correct_sound);
            updateImage();
            
        }
        else{
            playaudio(wrong_sound);
            alert("Remember to equalize the denominator first")
        }

        if (score === 24 && ans === answer()){
            const win = document.getElementById("gamewin")
            win.style.display = "flex";
        }
    }   
    

    return(
    <>
        <div className={style.background3}>
            <div className= {style.firstrow}>
                <p className= {style.score}>Score: {score}</p>
            </div>
            <div className= {style.secondrow}>
                <div className= {style.fraction}>
                    <input type="text" className= {style.input} id = "n1" autocomplete="off"/>
                    <hr />
                    <input type="text" className= {style.input} id = "d1" autocomplete="off"/>
                </div>
                <p>{sign}</p>
                <div className= {style.fraction}>
                    <input type="text" className= {style.input} id = "n2" autocomplete="off"/>
                    <hr />
                    <input type="text" className= {style.input} id = "d2" autocomplete="off"/>
                </div>
                <p>=</p>
                <div className= {style.fraction}>
                    <input type="text" className= {style.input} id = "n3" autocomplete="off" placeholder = "?"/>
                    <hr />
                    <input type="text" className= {style.input} id = "d3" autocomplete="off"/>
                </div>
            </div>
            <div className={style.thirdrow}>
                <a href = '/URECA/level6'><button className= {style.button}>Home</button></a>
                <button onClick={check} className={style.button}>Enter</button>
            </div>
            <div className= {style.gamewin} id = "gamewin">
                <p className= {style.score}>Winner!!</p>
                <div className={style.secondbutton}>
                    <a href = '/URECA/6-2'><button className= {style.button}>Retry</button></a>
                    <a href = '/URECA/Test6'><button className={style.button}>Next</button></a>
            </div>
            </div>
        </div>
    </>
    )
}

function L63(){

    function playaudio(str){
        const audio = new Audio(str);
        audio.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    }


    function getRandomImage() {
        // Generate random values for b (between 2 and 12)
        // Generate a random number 'a' between 2 and 12
    const a = Math.floor(Math.random() * 11) + 2;

    const minB = a + 1;

    // Generate 'b' as a random number between minB and 12, capped at 12
    const b = Math.floor(Math.random() * (13 - minB)) + minB;

    const num1 = Math.floor(Math.random() * 11) + 2;
    const maxNum2 = num1 * (b / a);
    const num2 = Math.max(1, Math.floor(Math.random() * Math.floor(maxNum2) + 1));
    const sign = Math.random() < 0.5 ? '+' : '-';

        return [a,b,num1,num2,sign];
    }

    const [d1, setD1] = useState();
    const [d2, setD2] = useState();
    const [d3, setD3] = useState();
    const [n1, setN1] = useState();
    const [n2, setN2] = useState();
    const [n3, setN3] = useState();
    const [score, setScore] = useState(0);
    const [sign, setSign] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Generate the image path as soon as the component is mounted
        setScore(0);
        setCount(0);
        updateImage();
        start();
    }, []);

    function updateImage() {
        try {
            const rendering = getRandomImage();
            setD1(rendering[0]);
            setD2(rendering[1]);
            setD3(rendering[0] * rendering[1]);
            setN1(rendering[2]);
            setN2(rendering[3]);
            setSign(rendering[4]);

            const denominator1 = document.getElementById("d1");
            const denominator2 = document.getElementById("d2");
            const denominator3 = document.getElementById("d3");
            denominator1.value = rendering[0];
            denominator2.value = rendering[1];
            denominator3.value = rendering[0] * rendering[1];

            const numerator1 = document.getElementById("n1");
            numerator1.value = rendering[2];
            const numerator2 = document.getElementById("n2");
            numerator2.value = rendering[3];

        } catch (error) {
            console.error("Image not found:", error);
        }
    }

    function answer(){
        if (sign === "+") return (d1*n2 + d2*n1);
        else return (d2*n1 - d1*n2);
    }

    function check(){
        setCount(c => c+ 1);
        const ans = parseInt(document.getElementById("n3").value);
        console.log(answer());

        if (ans === answer()){
            setScore(s => s + 1)
            playaudio(correct_sound);
            updateImage();
            
        }
        else{
            playaudio(wrong_sound);
            alert("Remember to equalize the denominator first")
        }

        if (count === 24){
            const win = document.getElementById("gamewin")
            win.style.display = "flex";
        }
    }   
    
    const [time, setTime] = useState(0); //time in milliseconds
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null);

    const start = () => {
        if (!isRunning) {
            setIsRunning(true);
            const startTime = Date.now() - time;
            timerRef.current = setInterval(() => {
                setTime(Date.now() - startTime);
            }, 1000 / 60);
        }
    };

    const stop = () => {
        if (isRunning) {
            clearInterval(timerRef.current);
            setIsRunning(false);
        }
    };

    const reset = () => {
        clearInterval(timerRef.current);
        setIsRunning(false);
        setTime(0);
    };

    const formatTime = () => {
        const minutes = String(Math.floor(time / 60000)).padStart(2, '0');
        const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, '0');
        const milliseconds = String(Math.floor((time % 1000) / 10)).padStart(2, '0');
        return `${minutes}:${seconds}:${milliseconds}`;
    };

    return(
    <>
        <div className={style.background3}>
            <p className= {style.time}>{formatTime()}</p>
            <div className= {style.firstrow}>
                <p className= {style.score}>Score: {score}</p>
            </div>
            <div className= {style.secondrow}>
                <div className= {style.fraction}>
                    <input type="text" className= {style.input} id = "n1" autocomplete="off"/>
                    <hr />
                    <input type="text" className= {style.input} id = "d1" autocomplete="off"/>
                </div>
                <p>{sign}</p>
                <div className= {style.fraction}>
                    <input type="text" className= {style.input} id = "n2" autocomplete="off"/>
                    <hr />
                    <input type="text" className= {style.input} id = "d2" autocomplete="off"/>
                </div>
                <p>=</p>
                <div className= {style.fraction}>
                    <input type="text" className= {style.input} id = "n3" autocomplete="off" placeholder = "?"/>
                    <hr />
                    <input type="text" className= {style.input} id = "d3" autocomplete="off"/>
                </div>
            </div>
            <div className={style.thirdrow}>
                <a href = '/URECA/level6'><button className= {style.button}>Home</button></a>
                <button onClick={check} className={style.button}>Enter</button>
            </div>
            <div className= {style.gamewin} id = "gamewin">
                <p className= {style.score}>Test Finish</p>
                <div className={style.secondbutton}>
                    <a href = '/URECA/Test6'><button className= {style.button}>Retry</button></a>
                    <a href = '/URECA/Level6'><button className={style.button}>Next</button></a>
            </div>
            </div>
        </div>
    </>
    )
}

export {L61, L62, L63};