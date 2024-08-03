import style from './Level1.module.css';
import { useState , useEffect, useRef } from 'react';
import correct_sound from '../assets/correct.wav';
import wrong_sound from '../assets/wrong.mp3';

function L11(){

    function playaudio(str){
        const audio = new Audio(str);
        audio.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    }


    function getRandomImage() {
        // Generate random values for b (between 2 and 12)
        const b = Math.floor(Math.random() * 11) + 2;
    
        // Generate a random value for a (between 1 and b-1)
        const a = Math.floor(Math.random() * (b - 1)) + 1;
    
        // Construct the image filename
        const imageName = `${a}-${b}.png`;
    
        // Assuming your images are in a public folder or imported somewhere
        const imagePath = `./src/Level1/Level1_png/${imageName}`;
        return [imagePath,a,b];
    }

    const [imagePath, setImagePath] = useState('');
    const [n, setN] = useState();
    const [score, setScore] = useState(0);

    useEffect(() => {
        // Generate the image path as soon as the component is mounted
        setScore(0);
        updateImage();
    }, []);

    function updateImage() {
        try {
            const newImagePath = getRandomImage();
            setImagePath(newImagePath[0]);
            setN(newImagePath[1]);

            const d = document.getElementById("d");
            d.value = newImagePath[2];
        } catch (error) {
            console.error("Image not found:", error);
        }
    }

    function check(){

        const numerator = document.getElementById("n").value

        if (numerator === n.toString()){
            setScore(s => s + 1)
            playaudio(correct_sound);
            updateImage();
            
        }
        else{
            playaudio(wrong_sound);
            alert("Remember fraction is blue area / total area")
        }

        if (score === 24 && numerator === n.toString()){
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
                <img src={imagePath} alt="#" className= {style.image} />
                <p>=</p>
                <div className= {style.fraction}>
                    <input type="text" className= {style.input} id = "n" autocomplete="off"/>
                    <hr />
                    <input type="text" className= {style.input} id = "d" autocomplete="off"/>
                </div>
            </div>
            <div className={style.thirdrow}>
                <a href = '/level1'><button className= {style.button}>Home</button></a>
                <button onClick={check} className={style.button}>Enter</button>
            </div>
            <div className= {style.gamewin} id = "gamewin">
                <p className= {style.score}>Winner!!</p>
                <div className={style.secondbutton}>
                    <a href = '/1-1'><button className= {style.button}>Retry</button></a>
                    <a href = '/1-2'><button className={style.button}>Next</button></a>
            </div>
            </div>
        </div>
    </>
    )
}


function L12(){

    function playaudio(str){
        const audio = new Audio(str);
        audio.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    }


    function getRandomImage() {
        // Generate random values for b (between 2 and 12)
        const b = Math.floor(Math.random() * 11) + 2;
    
        // Generate a random value for a (between 1 and b-1)
        const a = Math.floor(Math.random() * (b - 1)) + 1;
    
        // Construct the image filename
        const imageName = `${a}-${b}.png`;
    
        // Assuming your images are in a public folder or imported somewhere
        const imagePath = `./src/Level1/Level1_png/${imageName}`;
        return [imagePath,a,b];
    }

    const [imagePath, setImagePath] = useState('');
    const [n, setN] = useState();
    const [d, setD] = useState();
    const [score, setScore] = useState(0);

    useEffect(() => {
        // Generate the image path as soon as the component is mounted
        setScore(0);
        updateImage();
    }, []);

    function updateImage() {
        try {
            const newImagePath = getRandomImage();
            setImagePath(newImagePath[0]);
            setN(newImagePath[1]);
            setD(newImagePath[2]);

        } catch (error) {
            console.error("Image not found:", error);
        }
    }

    function check(){

        const numerator = document.getElementById("n").value
        const denominator = document.getElementById("d").value;

        if (numerator === n.toString() && denominator === d.toString()){
            setScore(s => s + 1)
            playaudio(correct_sound);
            updateImage();
            
        }
        else{
            playaudio(wrong_sound);
            alert("Remember fraction is blue area / total area")
        }

        if (score === 24 && numerator === n.toString() && denominator === d.toString()){
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
                <img src={imagePath} alt="#" className= {style.image} />
                <p>=</p>
                <div className= {style.fraction}>
                    <input type="text" className= {style.input} id = "n" autocomplete="off"/>
                    <hr />
                    <input type="text" className= {style.input} id = "d" autocomplete="off"/>
                </div>
            </div>
            <div className={style.thirdrow}>
                <a href = '/level1'><button className= {style.button}>Home</button></a>
                <button onClick={check} className={style.button}>Enter</button>
            </div>
            <div className= {style.gamewin} id = "gamewin">
                <p className= {style.score}>Winner!!</p>
                <div className={style.secondbutton}>
                    <a href = '/1-2'><button className= {style.button}>Retry</button></a>
                    <a href = '/Test1'><button className={style.button}>Next</button></a>
            </div>
            </div>
        </div>
    </>
    )
}

function L13(){

    function playaudio(str){
        const audio = new Audio(str);
        audio.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    }


    function getRandomImage() {
        // Generate random values for b (between 2 and 12)
        const b = Math.floor(Math.random() * 11) + 2;
    
        // Generate a random value for a (between 1 and b-1)
        const a = Math.floor(Math.random() * (b - 1)) + 1;
    
        // Construct the image filename
        const imageName = `${a}-${b}.png`;
    
        // Assuming your images are in a public folder or imported somewhere
        const imagePath = `./src/Level1/Level1_png/${imageName}`;
        return [imagePath,a,b];
    }

    const [imagePath, setImagePath] = useState('');
    const [n, setN] = useState();
    const [d, setD] = useState();
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Generate the image path as soon as the component is mounted
        setScore(0);
        setCount(0)
        updateImage();
        start();
    }, []);

    function updateImage() {
        try {
            const newImagePath = getRandomImage();
            setImagePath(newImagePath[0]);
            setN(newImagePath[1]);
            setD(newImagePath[2]);

        } catch (error) {
            console.error("Image not found:", error);
        }
    }

    function check(){
        setCount(c => c + 1)
        const numerator = document.getElementById("n").value
        const denominator = document.getElementById("d").value;

        if (numerator === n.toString() && denominator === d.toString()){
            setScore(s => s + 1)
            playaudio(correct_sound);
            updateImage();
            
        }
        else{
            playaudio(wrong_sound);
            alert("Remember fraction is blue area / total area")
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
                <img src={imagePath} alt="#" className= {style.image} />
                <p>=</p>
                <div className= {style.fraction}>
                    <input type="text" className= {style.input} id = "n" autocomplete="off"/>
                    <hr />
                    <input type="text" className= {style.input} id = "d" autocomplete="off"/>
                </div>
            </div>
            <div className={style.thirdrow}>
                <a href = '/level1'><button className= {style.button}>Home</button></a>
                <button onClick={check} className={style.button}>Enter</button>
            </div>
            <div className= {style.gamewin} id = "gamewin">
                <p className= {style.score}>Test Finish</p>
                <div className={style.secondbutton}>
                    <a href = '/Test1'><button className= {style.button}>Retry</button></a>
                    <a href = '/2-1'><button className={style.button}>Next</button></a>
            </div>
            </div>
        </div>
    </>
    )
}

export {L11, L12, L13};