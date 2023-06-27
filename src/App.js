import React from 'react'
import { Hello, TestCSS } from 'pymcomponents'
import 'pymcomponents/lib/index.cjs.css'
import Toolbar from './components/Toolbar';
import { ThemeContext, themes } from './components/theme-context';
import Component from './components/useStateDemo';
function App() {
  return (
    <div className="App">
      demo
      <br />
      {/* <Hello /> */}
      {/* <TestCSS /> */}
      {/* <ThemeContext.Provider value={themes}>
        <Toolbar />
      </ThemeContext.Provider> */}
      <Component/>
    </div>
  );
}

export default App;
