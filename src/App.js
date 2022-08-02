import logo from './assets/niklas-birk-logo.png';
import './App.css';

import {createTheme, NextUIProvider} from "@nextui-org/react"

const theme = createTheme({
    type: "dark",
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
            primaryLightActive: '$draculaSelection',
            primaryLightContrast: '$draculaSelection',
            primary: '$draculaPurple',
            primaryBorder: '$draculaPurple',
            primaryBorderHover: '$draculaPink',
            primarySolidHover: '$draculaPink',
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
            <div id="niklas-birk-root">
                <img id="logo" alt="Niklas logo" src={logo}/>
                <div>
                    <h1>Work in Progress</h1>
                    Das ist eine Seite im Aufbau.
                    <br/><br/>
                    Wichtige links:
                    <ul>
                        <li> Mail an <a href="mailto://niklas.birk@niklas-birk.de"> niklas.birk@niklas-birk.de </a></li>
                        <li> Meine self-hosted git repositories bei <a href="https://git.niklas-birk.de">Gitea</a></li>
                        <li> Mein self-hosted <a href="https://blog.niklas-birk.de">Blog</a></li>
                        <li> Meine self-hosted <a href="https://survey.niklas-birk.de">Umfragen</a></li>
                        <li> ...</li>
                    </ul>
                </div>
                <a href={process.env.PUBLIC_URL + 'impressum.html'}>Impressum und Datenschutz</a>
            </div>
        </NextUIProvider>
    );
}

export default App;
