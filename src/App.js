import logo from './logo.svg';
import './App.css';
import './protocol_style.css';
import data from './data.js';
import { useState } from 'react';
import Top from './Top';
import SelectedPage from './SelectedPage';

import chapterMap from './chapterMap.json';

export default function App() {
  let [selection,setSelection] = useState(null);

  return (
    <div>
      {selection && <SelectedPage {...{
        chapter:chapterMap[selection],
        title:selection,setSelection
      }}/>}
      {!selection && <Top {...{setSelection}}/>}
    </div>
  );
}

