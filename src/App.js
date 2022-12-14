import './App.css';

import {createTheme, NextUIProvider} from "@nextui-org/react"
import SiteContentRoot from "./components/SiteContentRoot";

const theme = createTheme({
    type: "dark",
    theme: {
        colors: {
            // color names
            draculaBackground: '#282a36',
            draculaCurrentLine: '#44475a',
            draculaCurrentLineAlpha: '#44475a66',
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
            <SiteContentRoot />
        </NextUIProvider>
    );
}

export default App;
