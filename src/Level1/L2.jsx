import style from './Level1.module.css';
import { useState , useEffect, useRef } from 'react';
import correct_sound from '../assets/correct.wav';
import wrong_sound from '../assets/wrong.mp3';
import { Link } from 'react-router-dom';

function L21(){

    function playaudio(str){
        const audio = new Audio(str);
        audio.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    }


    function getRandomImage() {
        // Generate random values for b (between 2 and 12)
        const n = Math.floor(Math.random() * 11) + 2;
    
        // Generate a random value for a (between 1 and b-1)
        const a = Math.floor(Math.random() * (n - 1)) + 1;
        const b = Math.floor(Math.random() * (n - 1)) + 1;

        return [n,a,b];
    }

    const [d, setD] = useState();
    const [n1, setN1] = useState();
    const [n2, setN2] = useState();
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Generate the image path as soon as the component is mounted
        setScore(0);
        setCount(0)
        updateImage();
    }, []);

    function updateImage() {
        try {
            const rendering = getRandomImage();
            setD(rendering[0]);
            setN1(rendering[1]);
            setN2(rendering[2]);

            const denominator1 = document.getElementById("d1");
            const denominator2 = document.getElementById("d2");
            denominator1.value = rendering[0];
            denominator2.value = rendering[0];

            const numerator1 = document.getElementById("n1");
            numerator1.value = rendering[1];

            const numerator2 = document.getElementById("n2");
            numerator2.value = rendering[2];
        } catch (error) {
            console.error("Image not found:", error);
        }
    }

    function answer(){
        if (n1 < n2) return "<"
        else if (n1 > n2) return ">"
        else return "="
    }

    function check(){
        setCount(c => c + 1);
        const ans = document.getElementById("ans").value.toString();

        if (ans === answer()){
            setScore(s => s + 1)
            playaudio(correct_sound);
            updateImage();
            
        }
        else{
            playaudio(wrong_sound);
            alert("Remember to straight compare the numerator if denominator is the same number")
        }

        if (score === 24 && ans === answer()){
            const win = document.getElementById("gamewin")
            win.style.display = "flex";
        }
    }   
    

    return (
        <>
            <div className={style.background2}>
                <div className={style.firstrow}>
                    <p className={style.score}>Score: {score}</p>
                </div>
                <div className={style.secondrow}>
                    <div className={style.fraction}>
                        <input type="text" className={style.input} id="n1" autoComplete="off"/>
                        <hr />
                        <input type="text" className={style.input} id="d1" autoComplete="off"/>
                    </div>
                    <input type="text" className={style.input1} id="ans" autoComplete="off" placeholder="?"/>
                    <div className={style.fraction}>
                        <input type="text" className={style.input} id="n2" autoComplete="off"/>
                        <hr />
                        <input type="text" className={style.input} id="d2" autoComplete="off"/>
                    </div>
                </div>
                <div className={style.thirdrow}>
                    <Link to="/level2">
                        <button className={style.button}>Home</button>
                    </Link>
                    <button onClick={check} className={style.button}>Enter</button>
                </div>
                <div className={style.gamewin} id="gamewin">
                    <p className={style.score}>Winner!!</p>
                    <div className={style.secondbutton}>
                        <Link to="/2-1">
                            <button className={style.button}>Retry</button>
                        </Link>
                        <Link to="/2-2">
                            <button className={style.button}>Next</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}


function L22(){

    function playaudio(str){
        const audio = new Audio(str);
        audio.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    }


    function getRandomImage() {
        // Generate random values for b (between 2 and 12)
        const a = Math.floor(Math.random() * 11) + 2;
        const b = Math.floor(Math.random() * 11) + 2;
    

        return [a,b];
    }

    const [d1, setD1] = useState();
    const [d2, setD2] = useState();
    const [n1, setN1] = useState();
    const [n2, setN2] = useState();
    const [score, setScore] = useState(0);

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
            setN1(1);
            setN2(1);

            const denominator1 = document.getElementById("d1");
            const denominator2 = document.getElementById("d2");
            denominator1.value = rendering[0];
            denominator2.value = rendering[1];

            const numerator1 = document.getElementById("n1");
            numerator1.value = 1;

            const numerator2 = document.getElementById("n2");
            numerator2.value = 1;
        } catch (error) {
            console.error("Image not found:", error);
        }
    }

    function answer(){
        if (d1 < d2) return ">"
        else if (d1 > d2) return "<"
        else return "="
    }

    function check(){

        const ans = document.getElementById("ans").value.toString();

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
    

    return (
        <>
            <div className={style.background2}>
                <div className={style.firstrow}>
                    <p className={style.score}>Score: {score}</p>
                </div>
                <div className={style.secondrow}>
                    <div className={style.fraction}>
                        <input type="text" className={style.input} id="n1" autoComplete="off"/>
                        <hr />
                        <input type="text" className={style.input} id="d1" autoComplete="off"/>
                    </div>
                    <input type="text" className={style.input1} id="ans" autoComplete="off" placeholder="?"/>
                    <div className={style.fraction}>
                        <input type="text" className={style.input} id="n2" autoComplete="off"/>
                        <hr />
                        <input type="text" className={style.input} id="d2" autoComplete="off"/>
                    </div>
                </div>
                <div className={style.thirdrow}>
                    <Link to="/level2">
                        <button className={style.button}>Home</button>
                    </Link>
                    <button onClick={check} className={style.button}>Enter</button>
                </div>
                <div className={style.gamewin} id="gamewin">
                    <p className={style.score}>Winner!!</p>
                    <div className={style.secondbutton}>
                        <Link to="/2-2">
                            <button className={style.button}>Retry</button>
                        </Link>
                        <Link to="/Test2">
                            <button className={style.button}>Next</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

function L23(){

    function playaudio(str){
        const audio = new Audio(str);
        audio.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    }


    function getRandomImage() {
        // Generate random values for b (between 2 and 12)
        const a = Math.floor(Math.random() * 11) + 2;
        const b = Math.floor(Math.random() * 11) + 2;
    

        return [a,b];
    }

    const [d1, setD1] = useState();
    const [d2, setD2] = useState();
    const [n1, setN1] = useState();
    const [n2, setN2] = useState();
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Generate the image path as soon as the component is mounted
        setScore(0);
        updateImage();
        start();
        setCount(0);
    }, []);

    function updateImage() {
        try {
            const rendering = getRandomImage();
            setD1(rendering[0]);
            setD2(rendering[1]);
            setN1(1);
            setN2(1);

            const denominator1 = document.getElementById("d1");
            const denominator2 = document.getElementById("d2");
            denominator1.value = rendering[0];
            denominator2.value = rendering[1];

            const numerator1 = document.getElementById("n1");
            numerator1.value = 1;

            const numerator2 = document.getElementById("n2");
            numerator2.value = 1;
        } catch (error) {
            console.error("Image not found:", error);
        }
    }

    function answer(){
        if (d1 < d2) return ">"
        else if (d1 > d2) return "<"
        else return "="
    }

    function check(){

        const ans = document.getElementById("ans").value.toString();

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

    return (
        <>
            <div className={style.background2}>
                <p className={style.time}>{formatTime()}</p>
                <div className={style.firstrow}>
                    <p className={style.score}>Score: {score}</p>
                </div>
                <div className={style.secondrow}>
                    <div className={style.fraction}>
                        <input type="text" className={style.input} id="n1" autoComplete="off"/>
                        <hr />
                        <input type="text" className={style.input} id="d1" autoComplete="off"/>
                    </div>
                    <input type="text" className={style.input1} id="ans" autoComplete="off" placeholder="?"/>
                    <div className={style.fraction}>
                        <input type="text" className={style.input} id="n2" autoComplete="off"/>
                        <hr />
                        <input type="text" className={style.input} id="d2" autoComplete="off"/>
                    </div>
                </div>
                <div className={style.thirdrow}>
                    <Link to="/level2">
                        <button className={style.button}>Home</button>
                    </Link>
                    <button onClick={check} className={style.button}>Enter</button>
                </div>
                <div className={style.gamewin} id="gamewin">
                    <p className={style.score}>Test Finish</p>
                    <div className={style.secondbutton}>
                        <Link to="/Test2">
                            <button className={style.button}>Retry</button>
                        </Link>
                        <Link to="/3-1">
                            <button className={style.button}>Next</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export {L21, L22, L23};