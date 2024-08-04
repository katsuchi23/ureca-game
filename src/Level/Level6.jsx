import React from 'react';
import { Link } from 'react-router-dom';
import style from './Level.module.css';

function Level6() {
    return (
        <>
            <div className={style.background}>
                <p className={style.title}>Level 6</p>
                <div className={style.buttoncontainer}>
                    <Link to="/6-1" className={style.href}><button className={style.button}>6-1</button></Link>
                    <Link to="/6-2" className={style.href}><button className={style.button}>6-2</button></Link>
                    <Link to="/Test6" className={style.href}><button className={style.button}>Test 6</button></Link>
                </div>
                <div className={style.changecontainer3}>
                    <Link to="/level5" className={style.href}><button className={style.button}>Level 5</button></Link>
                </div>
            </div>
        </>
    );
}

export default Level6;
