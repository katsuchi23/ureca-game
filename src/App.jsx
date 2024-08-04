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
    <div className={style.background1}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/level1" element={<Level1 />} />
        <Route path="/1-1" element={<L11 />} />
        <Route path="/1-2" element={<L12 />} />
        <Route path="/Test1" element={<L13 />} />

        <Route path="/level2" element={<Level2 />} />
        <Route path="/2-1" element={<L21 />} />
        <Route path="/2-2" element={<L22 />} />
        <Route path="/Test2" element={<L23 />} />

        <Route path="/level3" element={<Level3 />} />
        <Route path="/3-1" element={<L31 />} />
        <Route path="/3-2" element={<L32 />} />
        <Route path="/Test3" element={<L33 />} />

        <Route path="/level4" element={<Level4 />} />
        <Route path="/4-1" element={<L41 />} />
        <Route path="/4-2" element={<L42 />} />
        <Route path="/Test4" element={<L43 />} />

        <Route path="/level5" element={<Level5 />} />
        <Route path="/5-1" element={<L51 />} />
        <Route path="/5-2" element={<L52 />} />
        <Route path="/Test5" element={<L53 />} />

        <Route path="/level6" element={<Level6 />} />
        <Route path="/6-1" element={<L61 />} />
        <Route path="/6-2" element={<L62 />} />
        <Route path="/Test6" element={<L63 />} />
      </Routes>
      <Music />
    </div>
  );
}

export default App;
