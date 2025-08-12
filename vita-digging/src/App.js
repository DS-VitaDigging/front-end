import AppRouter from './router';
import theme from "./styles/theme";
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/globalStyle';
import { Global, ThemeProvider } from '@emotion/react';
import Header from './components/common/Header/header';
import NavBar from './components/common/nav/navBar';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <Header />
        <main>
          <AppRouter />
        </main>
        <NavBar />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
