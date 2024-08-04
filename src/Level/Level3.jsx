import React from 'react';
import { Link } from 'react-router-dom';
import style from './Level.module.css';

function Level3() {
    return (
        <>
            <div className={style.background}>
                <p className={style.title}>Level 3</p>
                <div className={style.buttoncontainer}>
                    <Link to="/3-1" className={style.href}><button className={style.button}>3-1</button></Link>
                    <Link to="/3-2" className={style.href}><button className={style.button}>3-2</button></Link>
                    <Link to="/Test3" className={style.href}><button className={style.button}>Test 3</button></Link>
                </div>
                <div className={style.changecontainer}>
                    <Link to="/level2" className={style.href}><button className={style.button}>Level 2</button></Link>
                    <Link to="/level4" className={style.href}><button className={style.button}>Level 4</button></Link>
                </div>
            </div>
        </>
    );
}

export default Level3;
