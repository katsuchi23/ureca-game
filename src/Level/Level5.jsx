import React from 'react';
import { Link } from 'react-router-dom';
import style from './Level.module.css';

function Level5() {
    return (
        <>
            <div className={style.background}>
                <p className={style.title}>Level 5</p>
                <div className={style.buttoncontainer}>
                    <Link to="/5-1" className={style.href}><button className={style.button}>5-1</button></Link>
                    <Link to="/5-2" className={style.href}><button className={style.button}>5-2</button></Link>
                    <Link to="/Test5" className={style.href}><button className={style.button}>Test 5</button></Link>
                </div>
                <div className={style.changecontainer}>
                    <Link to="/level4" className={style.href}><button className={style.button}>Level 4</button></Link>
                    <Link to="/level6" className={style.href}><button className={style.button}>Level 6</button></Link>
                </div>
            </div>
        </>
    );
}

export default Level5;
