import React from 'react'
import { Hello, TestCSS } from 'pymcomponents'
import 'pymcomponents/lib/index.cjs.css'
import Toolbar from './components/Toolbar';
import {ThemeContext, themes} from './components/theme-context';
function App() {
  return (
    <div className="App">
      demo
      <br />
      {/* <Hello /> */}
      {/* <TestCSS /> */}
      <ThemeContext.Provider value={themes}>
        <Toolbar />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
