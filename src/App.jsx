import { useState } from 'react'
import style from './App.module.css'
import {Route, Routes} from "react-router-dom"
import Login from './Login/Login'
import Level1 from './Level/Level1'
import Level2 from './Level/Level2'
import Level3 from './Level/Level3'
import Level4 from './Level/Level4'
import Level5 from './Level/Level5'
import Level6 from './Level/Level6'
import {L11, L12, L13} from './Level1/Level1-1'
import {L21, L22, L23} from './Level1/L2'
import {L31, L32, L33} from './Level1/L3'
import {L41, L42, L43} from './Level1/L4'
import {L51, L52, L53} from './Level1/L5'
import {L61, L62, L63} from './Level1/L6'
import Music from './Music'
import React, { useEffect, useRef } from 'react';

function App() {
  
  return (
    <>
    <div className={style.background1}>
      
      <Routes>
        <Route exact path = "/" element = {<Login></Login>}/>
        <Route exact path = "/level1" element = {<Level1></Level1>}/>
        <Route exact path = "/1-1" element = {<L11></L11>}/>
        <Route exact path = "/1-2" element = {<L12></L12>}/>
        <Route exact path = "/Test1" element = {<L13></L13>}/>

        <Route exact path = "/level2" element = {<Level2></Level2>}/>
        <Route exact path = "/2-1" element = {<L21></L21>}/>
        <Route exact path = "/2-2" element = {<L22></L22>}/>
        <Route exact path = "/Test2" element = {<L23></L23>}/>

        <Route exact path = "/level3" element = {<Level3></Level3>}/>
        <Route exact path = "/3-1" element = {<L31></L31>}/>
        <Route exact path = "/3-2" element = {<L32></L32>}/>
        <Route exact path = "/Test3" element = {<L33></L33>}/>

        <Route exact path = "/level4" element = {<Level4></Level4>}/>
        <Route exact path = "/4-1" element = {<L41></L41>}/>
        <Route exact path = "/4-2" element = {<L42></L42>}/>
        <Route exact path = "/Test4" element = {<L43></L43>}/>

        <Route exact path = "/level5" element = {<Level5></Level5>}/>
        <Route exact path = "/5-1" element = {<L51></L51>}/>
        <Route exact path = "/5-2" element = {<L52></L52>}/>
        <Route exact path = "/Test5" element = {<L53></L53>}/>

        <Route exact path = "/level6" element = {<Level6></Level6>}/>
        <Route exact path = "/6-1" element = {<L61></L61>}/>
        <Route exact path = "/6-2" element = {<L62></L62>}/>
        <Route exact path = "/Test6" element = {<L63></L63>}/>
      </Routes>
      <Music></Music>
    </div>
    </>
  )
}

export default App
