import React from 'react';
import { Link } from 'react-router-dom';
import style from './Level.module.css';

function Level4() {
    return (
        <>
            <div className={style.background}>
                <p className={style.title}>Level 4</p>
                <div className={style.buttoncontainer}>
                    <Link to="/URECA/4-1" className={style.href}><button className={style.button}>4-1</button></Link>
                    <Link to="/URECA/4-2" className={style.href}><button className={style.button}>4-2</button></Link>
                    <Link to="/URECA/Test4" className={style.href}><button className={style.button}>Test 4</button></Link>
                </div>
                <div className={style.changecontainer}>
                    <Link to="/URECA/level3" className={style.href}><button className={style.button}>Level 3</button></Link>
                    <Link to="/URECA/level5" className={style.href}><button className={style.button}>Level 5</button></Link>
                </div>
            </div>
        </>
    );
}

export default Level4;
