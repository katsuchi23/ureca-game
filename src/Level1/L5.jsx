import style from './Level1.module.css';
import { useState , useEffect, useRef } from 'react';
import correct_sound from '../assets/correct.wav';
import wrong_sound from '../assets/wrong.mp3';

function L51(){

    function playaudio(str){
        const audio = new Audio(str);
        audio.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    }


    function getRandomImage() {
        // Generate random values for b (between 2 and 12)
        // Generate 'a' and 'b' within the range of 2 to 12
        const a = Math.floor(Math.random() * 11) + 2;
        const b = Math.floor(Math.random() * 11) + 2;

        // Generate 'c' such that c < a, and 'd' such that d < b
        const c = Math.floor(Math.random() * (a - 1)) + 1; // c is between 1 and a-1
        const d = Math.floor(Math.random() * (b - 1)) + 1; // d is between 1 and b-1
    

        return [a,b,c,d];
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
            setN1(rendering[2]);
            setN2(rendering[3]);

            const denominator1 = document.getElementById("d1");
            const denominator2 = document.getElementById("d2");
            denominator1.value = rendering[0];
            denominator2.value = rendering[1];

            const numerator1 = document.getElementById("n1");
            numerator1.value = rendering[2];

            const numerator2 = document.getElementById("n2");
            numerator2.value = rendering[3];
        } catch (error) {
            console.error("Image not found:", error);
        }
    }

    function answer(){
        if (d2*n1 < d1*n2) return "<"
        else if (d2*n1 > d1*n2) return ">"
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
    

    return(
    <>
        <div className={style.background2}>
            <div className= {style.firstrow}>
                <p className= {style.score}>Score: {score}</p>
            </div>
            <div className= {style.secondrow}>
                <div className= {style.fraction}>
                    <input type="text" className= {style.input} id = "n1" autocomplete="off"/>
                    <hr />
                    <input type="text" className= {style.input} id = "d1" autocomplete="off"/>
                </div>
                <input type="text" className= {style.input1} id = "ans" autocomplete="off" placeholder = "?"/>
                <div className= {style.fraction}>
                    <input type="text" className= {style.input} id = "n2" autocomplete="off"/>
                    <hr />
                    <input type="text" className= {style.input} id = "d2" autocomplete="off"/>
                </div>
            </div>
            <div className={style.thirdrow}>
                <a href = '/level5'><button className= {style.button}>Home</button></a>
                <button onClick={check} className={style.button}>Enter</button>
            </div>
            <div className= {style.gamewin} id = "gamewin">
                <p className= {style.score}>Winner!!</p>
                <div className={style.secondbutton}>
                    <a href = '/5-1'><button className= {style.button}>Retry</button></a>
                    <a href = '/5-2'><button className={style.button}>Next</button></a>
            </div>
            </div>
        </div>
    </>
    )
}


function L52(){

    function playaudio(str){
        const audio = new Audio(str);
        audio.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    }


    function getRandomImage() {
        // Generate 'a', 'b', and 'c' within the range of 2 to 12
        const a = Math.floor(Math.random() * 11) + 2;
        const b = Math.floor(Math.random() * 11) + 2;
        const c = Math.floor(Math.random() * 11) + 2;

        // Generate 'd', 'e', and 'f' based on 'a', 'b', and 'c'
        // d < a, e < b, f < c
        const d = Math.floor(Math.random() * (a - 1)) + 1; // d is between 1 and a-1
        const e = Math.floor(Math.random() * (b - 1)) + 1; // e is between 1 and b-1
        const f = Math.floor(Math.random() * (c - 1)) + 1; // f is between 1 and c-1

    

        return [a,b,c,d,e,f];
    }

    const [d1, setD1] = useState();
    const [d2, setD2] = useState();
    const [d3, setD3] = useState();
    const [n1, setN1] = useState();
    const [n2, setN2] = useState();
    const [n3, setN3] = useState();
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
            setD3(rendering[2]);
            setN1(rendering[3]);
            setN2(rendering[4]);
            setN3(rendering[5]);

            const denominator1 = document.getElementById("d1");
            const denominator2 = document.getElementById("d2");
            const denominator3 = document.getElementById("d3");
            denominator1.value = rendering[0];
            denominator2.value = rendering[1];
            denominator3.value = rendering[2];

            const numerator1 = document.getElementById("n1");
            numerator1.value = rendering[3];

            const numerator2 = document.getElementById("n2");
            numerator2.value = rendering[4];

            const numerator3 = document.getElementById("n3");
            numerator3.value = rendering[5];
        } catch (error) {
            console.error("Image not found:", error);
        }
    }

    function answer1(){
        if (d2*n1 < d1*n2) return "<"
        else if (d2*n1 > d1*n2) return ">"
        else return "="
    }

    function answer2(){
        if (d3*n2 < d2*n3) return "<"
        else if (d3*n2 > d2*n3) return ">"
        else return "="
    }

    function check(){

        const ans1 = document.getElementById("ans1").value.toString();
        const ans2 = document.getElementById("ans2").value.toString();

        if (ans1 === answer1()  && ans2 === answer2()){
            setScore(s => s + 1)
            playaudio(correct_sound);
            updateImage();
            
        }
        else{
            playaudio(wrong_sound);
            alert("Remember to equalize the denominator first")
        }

        if (score === 24 && ans1 === answer1()  && ans2 === answer2()){
            const win = document.getElementById("gamewin")
            win.style.display = "flex";
        }
    }   
    

    return(
    <>
        <div className={style.background2}>
            <div className= {style.firstrow}>
                <p className= {style.score}>Score: {score}</p>
            </div>
            <div className= {style.secondrow}>
                <div className= {style.fraction}>
                    <input type="text" className= {style.input} id = "n1" autocomplete="off"/>
                    <hr />
                    <input type="text" className= {style.input} id = "d1" autocomplete="off"/>
                </div>
                <input type="text" className= {style.input1} id = "ans1" autocomplete="off" placeholder = "?"/>
                <div className= {style.fraction}>
                    <input type="text" className= {style.input} id = "n2" autocomplete="off"/>
                    <hr />
                    <input type="text" className= {style.input} id = "d2" autocomplete="off"/>
                </div>
                <input type="text" className= {style.input1} id = "ans2" autocomplete="off" placeholder = "?"/>
                <div className= {style.fraction}>
                    <input type="text" className= {style.input} id = "n3" autocomplete="off"/>
                    <hr />
                    <input type="text" className= {style.input} id = "d3" autocomplete="off"/>
                </div>
            </div>
            <div className={style.thirdrow}>
                <a href = '/level5'><button className= {style.button}>Home</button></a>
                <button onClick={check} className={style.button}>Enter</button>
            </div>
            <div className= {style.gamewin} id = "gamewin">
                <p className= {style.score}>Winner!!</p>
                <div className={style.secondbutton}>
                    <a href = '/5-2'><button className= {style.button}>Retry</button></a>
                    <a href = '/Test5'><button className={style.button}>Next</button></a>
            </div>
            </div>
        </div>
    </>
    )
}

function L53(){

    function playaudio(str){
        const audio = new Audio(str);
        audio.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    }


    function getRandomImage() {
        // Generate 'a', 'b', and 'c' within the range of 2 to 12
        const a = Math.floor(Math.random() * 11) + 2;
        const b = Math.floor(Math.random() * 11) + 2;
        const c = Math.floor(Math.random() * 11) + 2;

        // Generate 'd', 'e', and 'f' based on 'a', 'b', and 'c'
        // d < a, e < b, f < c
        const d = Math.floor(Math.random() * (a - 1)) + 1; // d is between 1 and a-1
        const e = Math.floor(Math.random() * (b - 1)) + 1; // e is between 1 and b-1
        const f = Math.floor(Math.random() * (c - 1)) + 1; // f is between 1 and c-1

    

        return [a,b,c,d,e,f];
    }

    const [d1, setD1] = useState();
    const [d2, setD2] = useState();
    const [d3, setD3] = useState();
    const [n1, setN1] = useState();
    const [n2, setN2] = useState();
    const [n3, setN3] = useState();
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Generate the image path as soon as the component is mounted
        setScore(0);
        updateImage();
        setCount(0);
        start();
    }, []);

    function updateImage() {
        try {
            const rendering = getRandomImage();
            setD1(rendering[0]);
            setD2(rendering[1]);
            setD3(rendering[2]);
            setN1(rendering[3]);
            setN2(rendering[4]);
            setN3(rendering[5]);

            const denominator1 = document.getElementById("d1");
            const denominator2 = document.getElementById("d2");
            const denominator3 = document.getElementById("d3");
            denominator1.value = rendering[0];
            denominator2.value = rendering[1];
            denominator3.value = rendering[2];

            const numerator1 = document.getElementById("n1");
            numerator1.value = rendering[3];

            const numerator2 = document.getElementById("n2");
            numerator2.value = rendering[4];

            const numerator3 = document.getElementById("n3");
            numerator3.value = rendering[5];
        } catch (error) {
            console.error("Image not found:", error);
        }
    }

    function answer1(){
        if (d2*n1 < d1*n2) return "<"
        else if (d2*n1 > d1*n2) return ">"
        else return "="
    }

    function answer2(){
        if (d3*n2 < d2*n3) return "<"
        else if (d3*n2 > d2*n3) return ">"
        else return "="
    }

    function check(){

        const ans1 = document.getElementById("ans1").value.toString();
        const ans2 = document.getElementById("ans2").value.toString();

        if (ans1 === answer1()  && ans2 === answer2()){
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
        <div className={style.background2}>
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
                <input type="text" className= {style.input1} id = "ans1" autocomplete="off" placeholder = "?"/>
                <div className= {style.fraction}>
                    <input type="text" className= {style.input} id = "n2" autocomplete="off"/>
                    <hr />
                    <input type="text" className= {style.input} id = "d2" autocomplete="off"/>
                </div>
                <input type="text" className= {style.input1} id = "ans2" autocomplete="off" placeholder = "?"/>
                <div className= {style.fraction}>
                    <input type="text" className= {style.input} id = "n3" autocomplete="off"/>
                    <hr />
                    <input type="text" className= {style.input} id = "d3" autocomplete="off"/>
                </div>
            </div>
            <div className={style.thirdrow}>
                <a href = '/level5'><button className= {style.button}>Home</button></a>
                <button onClick={check} className={style.button}>Enter</button>
            </div>
            <div className= {style.gamewin} id = "gamewin">
                <p className= {style.score}>Test Finish</p>
                <div className={style.secondbutton}>
                    <a href = '/Test5'><button className= {style.button}>Retry</button></a>
                    <a href = '/6-1'><button className={style.button}>Next</button></a>
            </div>
            </div>
        </div>
    </>
    )
}

export {L51, L52, L53};