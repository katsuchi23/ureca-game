import { Routes, Route } from 'react-router-dom';
import style from './App.module.css';
import Login from './Login/Login';
import Level1 from './Level/Level1';
import Level2 from './Level/Level2';
import Level3 from './Level/Level3';
import Level4 from './Level/Level4';
import Level5 from './Level/Level5';
import Level6 from './Level/Level6';
import { L11, L12, L13 } from './Level1/Level1-1';
import { L21, L22, L23 } from './Level1/L2';
import { L31, L32, L33 } from './Level1/L3';
import { L41, L42, L43 } from './Level1/L4';
import { L51, L52, L53 } from './Level1/L5';
import { L61, L62, L63 } from './Level1/L6';
import Music from './Music';

function App() {
  return (
    <>
      <div className={style.background1}>
        <Routes>
          <Route exact path="/URECA/" element={<Login />} />
          <Route exact path="/URECA/level1" element={<Level1 />} />
          <Route exact path="/URECA/1-1" element={<L11 />} />
          <Route exact path="/URECA/1-2" element={<L12 />} />
          <Route exact path="/URECA/Test1" element={<L13 />} />

          <Route exact path="/URECA/level2" element={<Level2 />} />
          <Route exact path="/URECA/2-1" element={<L21 />} />
          <Route exact path="/URECA/2-2" element={<L22 />} />
          <Route exact path="/URECA/Test2" element={<L23 />} />

          <Route exact path="/URECA/level3" element={<Level3 />} />
          <Route exact path="/URECA/3-1" element={<L31 />} />
          <Route exact path="/URECA/3-2" element={<L32 />} />
          <Route exact path="/URECA/Test3" element={<L33 />} />

          <Route exact path="/URECA/level4" element={<Level4 />} />
          <Route exact path="/URECA/4-1" element={<L41 />} />
          <Route exact path="/URECA/4-2" element={<L42 />} />
          <Route exact path="/URECA/Test4" element={<L43 />} />

          <Route exact path="/URECA/level5" element={<Level5 />} />
          <Route exact path="/URECA/5-1" element={<L51 />} />
          <Route exact path="/URECA/5-2" element={<L52 />} />
          <Route exact path="/URECA/Test5" element={<L53 />} />

          <Route exact path="/URECA/level6" element={<Level6 />} />
          <Route exact path="/URECA/6-1" element={<L61 />} />
          <Route exact path="/URECA/6-2" element={<L62 />} />
          <Route exact path="/URECA/Test6" element={<L63 />} />
        </Routes>
        <Music />
      </div>
    </>
  );
}

export default App;
