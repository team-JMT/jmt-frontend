import React from 'react';
import ReactDOM from 'react-dom/client';

import Vconsole from 'vconsole';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from './App.tsx';

import './index.css';
import '@stackflow/plugin-basic-ui/index.css';
import { BrowserRouter } from 'react-router-dom';

window.Kakao.init(import.meta.env.VITE_CONFIG_KAKAO_JS_KEY);
window.Kakao.isInitialized(); // init되면 true, 아니면 false를 반환한다

const queryClient = new QueryClient();
import.meta.env.DEV && new Vconsole({});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
);
