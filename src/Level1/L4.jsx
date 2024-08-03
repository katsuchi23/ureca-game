import style from './Level1.module.css';
import { useState , useEffect, useRef } from 'react';
import correct_sound from '../assets/correct.wav';
import wrong_sound from '../assets/wrong.mp3';

function L41(){

    function playaudio(str){
        const audio = new Audio(str);
        audio.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    }


    function getRandomImage() {
        const n = Math.floor(Math.random() * 11) + 2;
        const multiplier = Math.floor(Math.random() * 12) + 1;
        // Generate a random value for a (between 1 and b-1)
        const a = Math.floor(Math.random() * (n - 1)) + 1;

        return [n,a,multiplier];
    }

    const [d1, setD1] = useState();
    const [d2, setD2] = useState();
    const [n1, setN1] = useState();
    const [n2, setN2] = useState();
    const [score, setScore] = useState(0);
    const [multi, setMulti] = useState(0);

    useEffect(() => {
        // Generate the image path as soon as the component is mounted
        setScore(0);
        updateImage();
    }, []);

    function updateImage() {
        try {
            const rendering = getRandomImage();
            setMulti(rendering[2]);
            setD1(rendering[0]);
            setD2(rendering[0] * rendering[2]);
            setN1(rendering[1]);
            setN2(rendering[1] * rendering[2]);

            const denominator1 = document.getElementById("d1");
            const denominator2 = document.getElementById("d2");
            denominator1.value = rendering[0];
            denominator2.value = rendering[0] * rendering[2];

            const numerator1 = document.getElementById("n1");
            numerator1.value = rendering[1];

        } catch (error) {
            console.error("Image not found:", error);
        }
    }

    function check(){
        const ans = parseInt(document.getElementById("n2").value);
        
        if (ans === n2){
            setScore(s => s + 1)
            playaudio(correct_sound);
            updateImage();
            
        }
        else{
            playaudio(wrong_sound);
            alert("Remember to multiply the numerator")
        }

        if (score === 24 && ans === n2){
            const win = document.getElementById("gamewin")
            win.style.display = "flex";
        }
    }   
    

    return(
    <>
        <div className={style.background1}>
            <div className= {style.firstrow}>
                <p className= {style.score}>Score: {score}</p>
            </div>
            <div className= {style.secondrow}>
                <div className= {style.fraction}>
                    <input type="text" className= {style.input} id = "n1" autocomplete="off"/>
                    <hr />
                    <input type="text" className= {style.input} id = "d1" autocomplete="off"/>
                </div>
                <p>=</p>
                <div className= {style.fraction}>
                    <input type="text" className= {style.input} id = "n2" autocomplete="off" placeholder = "?"/>
                    <hr />
                    <input type="text" className= {style.input} id = "d2" autocomplete="off"/>
                </div>
            </div>
            <div className={style.thirdrow}>
                <a href = '/level4'><button className= {style.button}>Home</button></a>
                <button onClick={check} className={style.button}>Enter</button>
            </div>
            <div className= {style.gamewin} id = "gamewin">
                <p className= {style.score}>Winner!!</p>
                <div className={style.secondbutton}>
                    <a href = '/4-1'><button className= {style.button}>Retry</button></a>
                    <a href = '/4-2'><button className={style.button}>Next</button></a>
            </div>
            </div>
        </div>
    </>
    )
}


function L42(){

    function playaudio(str){
        const audio = new Audio(str);
        audio.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    }


    function getRandomImage() {
        const n = Math.floor(Math.random() * 11) + 2;
        const multiplier = Math.floor(Math.random() * 12) + 1;
        // Generate a random value for a (between 1 and b-1)
        const a = Math.floor(Math.random() * (n - 1)) + 1;

        return [n,a,multiplier];
    }

    const [d1, setD1] = useState();
    const [d2, setD2] = useState();
    const [n1, setN1] = useState();
    const [n2, setN2] = useState();
    const [score, setScore] = useState(0);
    const [multi, setMulti] = useState(0);

    useEffect(() => {
        // Generate the image path as soon as the component is mounted
        setScore(0);
        updateImage();
    }, []);

    function updateImage() {
        try {
            const rendering = getRandomImage();
            setMulti(rendering[2]);
            setD2(rendering[0]);
            setD1(rendering[0] * rendering[2]);
            setN2(rendering[1]);
            setN1(rendering[1] * rendering[2]);

            const denominator1 = document.getElementById("d1");
            const denominator2 = document.getElementById("d2");
            denominator2.value = rendering[0];
            denominator1.value = rendering[0] * rendering[2];

            const numerator1 = document.getElementById("n1");
            numerator1.value = rendering[1] * rendering[2];

        } catch (error) {
            console.error("Image not found:", error);
        }
    }

    function check(){
        const ans = parseInt(document.getElementById("n2").value);
        
        if (ans === n2){
            setScore(s => s + 1)
            playaudio(correct_sound);
            updateImage();
            
        }
        else{
            playaudio(wrong_sound);
            alert("Remember to devide the numerator")
        }

        if (score === 24 && ans === n2){
            const win = document.getElementById("gamewin")
            win.style.display = "flex";
        }
    }   
    

    return(
    <>
        <div className={style.background1}>
            <div className= {style.firstrow}>
                <p className= {style.score}>Score: {score}</p>
            </div>
            <div className= {style.secondrow}>
                <div className= {style.fraction}>
                    <input type="text" className= {style.input} id = "n1" autocomplete="off"/>
                    <hr />
                    <input type="text" className= {style.input} id = "d1" autocomplete="off"/>
                </div>
                <p>=</p>
                <div className= {style.fraction}>
                    <input type="text" className= {style.input} id = "n2" autocomplete="off" placeholder = "?"/>
                    <hr />
                    <input type="text" className= {style.input} id = "d2" autocomplete="off"/>
                </div>
            </div>
            <div className={style.thirdrow}>
                <a href = '/level4'><button className= {style.button}>Home</button></a>
                <button onClick={check} className={style.button}>Enter</button>
            </div>
            <div className= {style.gamewin} id = "gamewin">
                <p className= {style.score}>Winner!!</p>
                <div className={style.secondbutton}>
                    <a href = '/4-2'><button className= {style.button}>Retry</button></a>
                    <a href = '/Test4'><button className={style.button}>Next</button></a>
            </div>
            </div>
        </div>
    </>
    )
}

function L43(){

    function playaudio(str){
        const audio = new Audio(str);
        audio.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    }


    function getRandomImage() {
        const n = Math.floor(Math.random() * 11) + 2;
        const multiplier = Math.floor(Math.random() * 12) + 1;
        // Generate a random value for a (between 1 and b-1)
        const a = Math.floor(Math.random() * (n - 1)) + 1;

        return [n,a,multiplier];
    }

    const [d1, setD1] = useState();
    const [d2, setD2] = useState();
    const [n1, setN1] = useState();
    const [n2, setN2] = useState();
    const [score, setScore] = useState(0);
    const [multi, setMulti] = useState(0);
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
            setMulti(rendering[2]);
            setD2(rendering[0]);
            setD1(rendering[0] * rendering[2]);
            setN2(rendering[1]);
            setN1(rendering[1] * rendering[2]);

            const denominator1 = document.getElementById("d1");
            const denominator2 = document.getElementById("d2");
            denominator2.value = rendering[0];
            denominator1.value = rendering[0] * rendering[2];

            const numerator1 = document.getElementById("n1");
            numerator1.value = rendering[1] * rendering[2];

        } catch (error) {
            console.error("Image not found:", error);
        }
    }

    function check(){
        const ans = parseInt(document.getElementById("n2").value);
        
        if (ans === n2){
            setScore(s => s + 1)
            playaudio(correct_sound);
            updateImage();
            
        }
        else{
            playaudio(wrong_sound);
            alert("Remember to devide the numerator")
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
        <div className={style.background1}>
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
                <p>=</p>
                <div className= {style.fraction}>
                    <input type="text" className= {style.input} id = "n2" autocomplete="off" placeholder = "?"/>
                    <hr />
                    <input type="text" className= {style.input} id = "d2" autocomplete="off"/>
                </div>
            </div>
            <div className={style.thirdrow}>
                <a href = '/level4'><button className= {style.button}>Home</button></a>
                <button onClick={check} className={style.button}>Enter</button>
            </div>
            <div className= {style.gamewin} id = "gamewin">
                <p className= {style.score}>Test Finish</p>
                <div className={style.secondbutton}>
                    <a href = '/Test4'><button className= {style.button}>Retry</button></a>
                    <a href = '/5-1'><button className={style.button}>Next</button></a>
            </div>
            </div>
        </div>
    </>
    )
}

export {L41, L42, L43};