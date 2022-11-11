import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Main from './pages/Main';

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
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
