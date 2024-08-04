import React from 'react';
import { Link } from 'react-router-dom';
import style from './Level.module.css';

function Level2() {
    return (
        <>
            <div className={style.background}>
                <p className={style.title}>Level 2</p>
                <div className={style.buttoncontainer}>
                    <Link to="/2-1" className={style.href}><button className={style.button}>2-1</button></Link>
                    <Link to="/2-2" className={style.href}><button className={style.button}>2-2</button></Link>
                    <Link to="/Test2" className={style.href}><button className={style.button}>Test 2</button></Link>
                </div>
                <div className={style.changecontainer}>
                    <Link to="/level1" className={style.href}><button className={style.button}>Level 1</button></Link>
                    <Link to="/level3" className={style.href}><button className={style.button}>Level 3</button></Link>
                </div>
            </div>
        </>
    );
}

export default Level2;
