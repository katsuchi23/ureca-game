import style from './Level.module.css'

function Buttonstyle(str){
    return(
        <button className={style.button}>{str}</button>
    )
}

export default Buttonstyle;