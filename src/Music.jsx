import React, { useEffect, useRef, useState } from 'react';
import bgm from "./assets/bgm.mp3";
import style from "./Music.module.css";

function Music() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        // Check if the music was playing before the page reload
        const wasPlaying = localStorage.getItem('isPlaying') === 'true';
        const savedTime = localStorage.getItem('currentTime') || 0;

        if (audioRef.current) {
            audioRef.current.currentTime = parseFloat(savedTime);
        }

        if (wasPlaying) {
            handlePlay();
        }

        // Save the current time periodically and before unload
        const saveCurrentTime = () => {
            localStorage.setItem('currentTime', audioRef.current.currentTime);
        };

        const saveStateBeforeUnload = () => {
            localStorage.setItem('isPlaying', isPlaying);
            saveCurrentTime();
        };

        window.addEventListener('beforeunload', saveStateBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', saveStateBeforeUnload);
        };
    }, [isPlaying]);

    const handlePlay = () => {
        audioRef.current.play().then(() => {
            setIsPlaying(true);
            localStorage.setItem('isPlaying', 'true');
        }).catch((error) => {
            console.log('Autoplay was prevented:', error);
        });
    };

    const handlePause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
        localStorage.setItem('isPlaying', 'false');
    };

    return (
        <>
            <audio ref={audioRef} src={bgm} preload="auto" loop>
                Your browser does not support the audio element.
            </audio>
            {!isPlaying && <button onClick={handlePlay} className={style.buttonoff}></button>}
            {isPlaying && <button onClick={handlePause} className={style.buttonon}></button>}
        </>
    );
}

export default Music;
