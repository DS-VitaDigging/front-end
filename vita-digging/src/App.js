import './router';
import AppRouter from './router';
import theme from "./styles/theme";
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/globalStyle';
import { Global, ThemeProvider } from '@emotion/react';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
