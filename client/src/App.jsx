import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from './styles';
import Intro from './pages/Intro';
import Main from './pages/Main';
import Items from './pages/Items';
import Mypage from './pages/MyPage';
import MixList from './pages/MixList';
import MixDetail from './pages/MixDetail';
import MixCreate from './pages/MixCreate';

const queryClient = new QueryClient();

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (auth !== null) {
      setAuth(localStorage.getItem('isLogin'));
    }
    window.scrollTo(0, 0); // 페이지 이동시 스크롤 상단 고정
    return () => {
      setAuth(false);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/intro" element={<Intro />} />
            <Route path="/" element={<Main />} />
            <Route path="/items" element={<Items />} />
            <Route path="/MyPage" element={<Mypage />} />
            <Route path="/MixList" element={<MixList />} />
            <Route path="/MixDetail/:id" element={<MixDetail />} />
            <Route path="/MixCreate" element={<MixCreate />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
