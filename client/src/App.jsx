import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from './styles';
import Intro from './pages/Intro';
import Main from './pages/Main';
import Items from './pages/Items';
import Mypage from './pages/MyPage';
import MixList from './pages/MixList';
import MixDetail from './pages/MixDetail';
import Error from './pages/Error';
import MixCreate from './pages/MixCreate';
import Join from './pages/Join';
import BeerRequest from './pages/BeerRequest';
import BeerList from './pages/BeerList';
import Login from './pages/Login';
import MixUpdate from './pages/MixUpdate';

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
          <Routes>
            <Route path="/intro" element={<Intro />} />
            <Route path="/" element={<Main />} />
            <Route path="/items" element={<Items />} />
            <Route path="/MyPage" element={<Mypage />} />
            <Route path="/MixList" element={<MixList />} />
            <Route path="/MixDetail/:id" element={<MixDetail />} />
            <Route path="/Mix/create" element={<MixCreate />} />
            <Route path="MixDetail/update/:id" element={<MixUpdate />} />
            <Route path="/join" element={<Join />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/BeerRequest" element={<BeerRequest />} />
            <Route path="/BeerList" element={<BeerList />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
