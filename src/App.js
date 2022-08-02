import logo from './logo.svg';
import './App.css';

import { createTheme, NextUIProvider } from "@nextui-org/react"

const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      // color names
      draculaBackground: '#282a36',
      draculaCurrentLine: '#44475a',
      draculaSelection: '#44475a',
      draculaForeground: '#f8f8f2',
      draculaComment: '#6272a4',
      draculaCyan: '#8be9fd',
      draculaGreen: '#50fa7b',
      draculaOrange: '#ffb86c',
      draculaPink: '#ff79c6',
      draculaPurple: '#bd93f9',
      draculaRed: '#ff5555',
      draculaYellow: '#f1fa8c',

      // brand colors
      background: '$draculaBackground',
      text: '$draculaForeground',
      primaryLight: '$draculaSelection',
      primaryLightHover: '$draculaComment',
      primaryLightActive: '$draculaComment',
      primaryLightContrast: '$draculaComment',
      primary: '$draculaPurple',
      primaryBorder: '$draculaPurple',
      primaryBorderHover: '$draculaPurple',
      primarySolidHover: '$draculaPurple',
      primarySolidContrast: '$draculaForeground',
      primaryShadow: '$draculaPurple',

      gradient: 'linear-gradient(112deg, $draculaCyan -25%, $draculaPink -10%, $draculaPurple 80%)',
      link: '$draculaPurple',
    },
    space: {},
    fonts: {
      sans: "'Roboto', 'Fira Sans', 'Helvetica Neue', sans-serif;",
      mono: "Monaco, 'Liberation Mono'"
    }
  }
})

function App() {
  return (
      <NextUIProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </NextUIProvider>
  );
}

export default App;
