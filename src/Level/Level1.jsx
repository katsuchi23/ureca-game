import React from 'react';
import { Link } from 'react-router-dom';
import style from './Level.module.css';

function Level1() {
    return (
        <>
            <div className={style.background}>
                <p className={style.title}>Level 1</p>
                <div className={style.buttoncontainer}>
                    <Link to="/URECA/1-1" className={style.href}><button className={style.button}>1-1</button></Link>
                    <Link to="/URECA/1-2" className={style.href}><button className={style.button}>1-2</button></Link>
                    <Link to="/URECA/Test1" className={style.href}><button className={style.button}>Test 1</button></Link>
                </div>
                <div className={style.changecontainer2}>
                    <Link to="/URECA/level2" className={style.href}><button className={style.button}>Level 2</button></Link>
                </div>
            </div>
        </>
    );
}

export default Level1;
