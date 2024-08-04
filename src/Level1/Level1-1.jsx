import style from './Level1.module.css';
import { useState , useEffect, useRef } from 'react';
import correct_sound from '../assets/correct.wav';
import wrong_sound from '../assets/wrong.mp3';
import { Link } from 'react-router-dom';

// Import all possible images
import image_1_2 from './Level1_png/1-2.png';
import image_1_3 from './Level1_png/1-3.png';
import image_1_4 from './Level1_png/1-4.png';
import image_1_5 from './Level1_png/1-5.png';
import image_1_6 from './Level1_png/1-6.png';
import image_1_7 from './Level1_png/1-7.png';
import image_1_8 from './Level1_png/1-8.png';
import image_1_9 from './Level1_png/1-9.png';
import image_1_10 from './Level1_png/1-10.png';
import image_1_11 from './Level1_png/1-11.png';
import image_1_12 from './Level1_png/1-12.png';

import image_2_3 from './Level1_png/2-3.png';
import image_2_4 from './Level1_png/2-4.png';
import image_2_5 from './Level1_png/2-5.png';
import image_2_6 from './Level1_png/2-6.png';
import image_2_7 from './Level1_png/2-7.png';
import image_2_8 from './Level1_png/2-8.png';
import image_2_9 from './Level1_png/2-9.png';
import image_2_10 from './Level1_png/2-10.png';
import image_2_11 from './Level1_png/2-11.png';
import image_2_12 from './Level1_png/2-12.png';

import image_3_4 from './Level1_png/3-4.png';
import image_3_5 from './Level1_png/3-5.png';
import image_3_6 from './Level1_png/3-6.png';
import image_3_7 from './Level1_png/3-7.png';
import image_3_8 from './Level1_png/3-8.png';
import image_3_9 from './Level1_png/3-9.png';
import image_3_10 from './Level1_png/3-10.png';
import image_3_11 from './Level1_png/3-11.png';
import image_3_12 from './Level1_png/3-12.png';

import image_4_5 from './Level1_png/4-5.png';
import image_4_6 from './Level1_png/4-6.png';
import image_4_7 from './Level1_png/4-7.png';
import image_4_8 from './Level1_png/4-8.png';
import image_4_9 from './Level1_png/4-9.png';
import image_4_10 from './Level1_png/4-10.png';
import image_4_11 from './Level1_png/4-11.png';
import image_4_12 from './Level1_png/4-12.png';

import image_5_6 from './Level1_png/5-6.png';
import image_5_7 from './Level1_png/5-7.png';
import image_5_8 from './Level1_png/5-8.png';
import image_5_9 from './Level1_png/5-9.png';
import image_5_10 from './Level1_png/5-10.png';
import image_5_11 from './Level1_png/5-11.png';
import image_5_12 from './Level1_png/5-12.png';

import image_6_7 from './Level1_png/6-7.png';
import image_6_8 from './Level1_png/6-8.png';
import image_6_9 from './Level1_png/6-9.png';
import image_6_10 from './Level1_png/6-10.png';
import image_6_11 from './Level1_png/6-11.png';
import image_6_12 from './Level1_png/6-12.png';

import image_7_8 from './Level1_png/7-8.png';
import image_7_9 from './Level1_png/7-9.png';
import image_7_10 from './Level1_png/7-10.png';
import image_7_11 from './Level1_png/7-11.png';
import image_7_12 from './Level1_png/7-12.png';

import image_8_9 from './Level1_png/8-9.png';
import image_8_10 from './Level1_png/8-10.png';
import image_8_11 from './Level1_png/8-11.png';
import image_8_12 from './Level1_png/8-12.png';

import image_9_10 from './Level1_png/9-10.png';
import image_9_11 from './Level1_png/9-11.png';
import image_9_12 from './Level1_png/9-12.png';

import image_10_11 from './Level1_png/10-11.png';
import image_10_12 from './Level1_png/10-12.png';

import image_11_12 from './Level1_png/11-12.png';



// Map image names to imported image paths
const imageMap = {
    '1-2': image_1_2,
    '1-3': image_1_3,
    '1-4': image_1_4,
    '1-5': image_1_5,
    '1-6': image_1_6,
    '1-7': image_1_7,
    '1-8': image_1_8,
    '1-9': image_1_9,
    '1-10': image_1_10,
    '1-11': image_1_11,
    '1-12': image_1_12,
    '2-3': image_2_3,
    '2-4': image_2_4,
    '2-5': image_2_5,
    '2-6': image_2_6,
    '2-7': image_2_7,
    '2-8': image_2_8,
    '2-9': image_2_9,
    '2-10': image_2_10,
    '2-11': image_2_11,
    '2-12': image_2_12,
    '3-4': image_3_4,
    '3-5': image_3_5,
    '3-6': image_3_6,
    '3-7': image_3_7,
    '3-8': image_3_8,
    '3-9': image_3_9,
    '3-10': image_3_10,
    '3-11': image_3_11,
    '3-12': image_3_12,
    '4-5': image_4_5,
    '4-6': image_4_6,
    '4-7': image_4_7,
    '4-8': image_4_8,
    '4-9': image_4_9,
    '4-10': image_4_10,
    '4-11': image_4_11,
    '4-12': image_4_12,
    '5-6': image_5_6,
    '5-7': image_5_7,
    '5-8': image_5_8,
    '5-9': image_5_9,
    '5-10': image_5_10,
    '5-11': image_5_11,
    '5-12': image_5_12,
    '6-7': image_6_7,
    '6-8': image_6_8,
    '6-9': image_6_9,
    '6-10': image_6_10,
    '6-11': image_6_11,
    '6-12': image_6_12,
    '7-8': image_7_8,
    '7-9': image_7_9,
    '7-10': image_7_10,
    '7-11': image_7_11,
    '7-12': image_7_12,
    '8-9': image_8_9,
    '8-10': image_8_10,
    '8-11': image_8_11,
    '8-12': image_8_12,
    '9-10': image_9_10,
    '9-11': image_9_11,
    '9-12': image_9_12,
    '10-11': image_10_11,
    '10-12': image_10_12,
    '11-12': image_11_12,
};


function L11() {
    function playaudio(str) {
        const audio = new Audio(str);
        audio.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    }

    function getRandomImage() {
        const b = Math.floor(Math.random() * 11) + 2; // Denominator
        const a = Math.floor(Math.random() * (b - 1)) + 1; // Numerator
        const imageName = `${a}-${b}`; // Construct the image name without file extension
        
        // Look up the image path in the imageMap
        const imagePath = imageMap[imageName];
        
        if (imagePath) {
            return [imagePath, a, b];
        } else {
            console.error(`Image not found for ${imageName}`);
            // Return a fallback image or handle the error as needed
            return [null, a, b];
        }
    }
    

    const [imagePath, setImagePath] = useState('');
    const [n, setN] = useState();
    const [score, setScore] = useState(0);

    useEffect(() => {
        setScore(0);
        updateImage();
    }, []);

    function updateImage() {
        try {
            const newImagePath = getRandomImage();
            setImagePath(newImagePath[0]);
            setN(newImagePath[1]);
        } catch (error) {
            console.error("Image not found:", error);
        }
    }

    function check() {
        const numerator = document.getElementById("n").value;

        if (numerator === n.toString()) {
            setScore(s => s + 1);
            playaudio(correct_sound);
            updateImage();
        } else {
            playaudio(wrong_sound);
            alert("Remember fraction is blue area / total area");
        }

        if (score === 24 && numerator === n.toString()) {
            document.getElementById("gamewin").style.display = "flex";
        }
    }

    return (
        <>
        <div className={style.background1}>
            <div className={style.firstrow}>
                <p className={style.score}>Score: {score}</p>
            </div>
            <div className={style.secondrow}>
                <img src={imagePath} alt="fraction" className={style.image} />
                <p>=</p>
                <div className={style.fraction}>
                    <input type="text" className={style.input} id="n" autoComplete="off" placeholder='?'/>
                    <hr />
                    <input type="text" className={style.input} id="d" autoComplete="off" placeholder='?'/>
                </div>
            </div>
            <div className={style.thirdrow}>
                <Link to="/level1"><button className={style.button}>Home</button></Link>
                <button onClick={check} className={style.button}>Enter</button>
            </div>
            <div className={style.gamewin} id="gamewin">
                <p className={style.score}>Winner!!</p>
                <div className={style.secondbutton}>
                    <Link to="/1-1"><button className={style.button}>Retry</button></Link>
                    <Link to="/1-2"><button className={style.button}>Next</button></Link>
                </div>
            </div>
        </div>
        </>
    );
}

function L12() {
    function playaudio(str) {
        const audio = new Audio(str);
        audio.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    }

    function getRandomImage() {
        const b = Math.floor(Math.random() * 11) + 2; // Denominator
        const a = Math.floor(Math.random() * (b - 1)) + 1; // Numerator
        const imageName = `${a}-${b}`; // Construct the image name without file extension
        
        // Look up the image path in the imageMap
        const imagePath = imageMap[imageName];
        
        if (imagePath) {
            return [imagePath, a, b];
        } else {
            console.error(`Image not found for ${imageName}`);
            // Return a fallback image or handle the error as needed
            return [null, a, b];
        }
    }

    const [imagePath, setImagePath] = useState('');
    const [n, setN] = useState();
    const [d, setD] = useState();
    const [score, setScore] = useState(0);

    useEffect(() => {
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

    function check() {
        const numerator = document.getElementById("n").value;
        const denominator = document.getElementById("d").value;

        if (numerator === n.toString() && denominator === d.toString()) {
            setScore(s => s + 1);
            playaudio(correct_sound);
            updateImage();
        } else {
            playaudio(wrong_sound);
            alert("Remember fraction is blue area / total area");
        }

        if (score === 24 && numerator === n.toString() && denominator === d.toString()) {
            document.getElementById("gamewin").style.display = "flex";
        }
    }

    return (
        <>
        <div className={style.background1}>
            <div className={style.firstrow}>
                <p className={style.score}>Score: {score}</p>
            </div>
            <div className={style.secondrow}>
                <img src={imagePath} alt="fraction" className={style.image} />
                <p>=</p>
                <div className={style.fraction}>
                    <input type="text" className={style.input} id="n" autoComplete="off" placeholder='?'/>
                    <hr />
                    <input type="text" className={style.input} id="d" autoComplete="off" placeholder='?'/>
                </div>
            </div>
            <div className={style.thirdrow}>
                <Link to="/level1"><button className={style.button}>Home</button></Link>
                <button onClick={check} className={style.button}>Enter</button>
            </div>
            <div className={style.gamewin} id="gamewin">
                <p className={style.score}>Winner!!</p>
                <div className={style.secondbutton}>
                    <Link to="/1-2"><button className={style.button}>Retry</button></Link>
                    <Link to="/Test1"><button className={style.button}>Next</button></Link>
                </div>
            </div>
        </div>
    </>
    );
}

function L13(){

    function playaudio(str){
        const audio = new Audio(str);
        audio.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    }


    function getRandomImage() {
        const b = Math.floor(Math.random() * 11) + 2; // Denominator
        const a = Math.floor(Math.random() * (b - 1)) + 1; // Numerator
        const imageName = `${a}-${b}`; // Construct the image name without file extension
        
        // Look up the image path in the imageMap
        const imagePath = imageMap[imageName];
        
        if (imagePath) {
            return [imagePath, a, b];
        } else {
            console.error(`Image not found for ${imageName}`);
            // Return a fallback image or handle the error as needed
            return [null, a, b];
        }
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

    return (
        <>
        <div className={style.background1}>
            <p className={style.time}>{formatTime()}</p>
            <div className={style.firstrow}>
                <p className={style.score}>Score: {score}</p>
            </div>
            <div className={style.secondrow}>
                <img src={imagePath} alt="fraction" className={style.image} />
                <p>=</p>
                <div className={style.fraction}>
                    <input type="text" className={style.input} id="n" autoComplete="off"  placeholder='?'/>
                    <hr />
                    <input type="text" className={style.input} id="d" autoComplete="off"  placeholder='?'/>
                </div>
            </div>
            <div className={style.thirdrow}>
                <Link to="/level1"><button className={style.button}>Home</button></Link>
                <button onClick={check} className={style.button}>Enter</button>
            </div>
            <div className={style.gamewin} id="gamewin">
                <p className={style.score}>Test Finish</p>
                <div className={style.secondbutton}>
                    <Link to="/Test1"><button className={style.button}>Retry</button></Link>
                    <Link to="/2-1"><button className={style.button}>Next</button></Link>
                </div>
            </div>
        </div>
        </>
    );
}

export {L11, L12, L13};