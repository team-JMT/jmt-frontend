import React from 'react';
import ReactDOM from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from './App.tsx';
import './index.css';
import '@stackflow/plugin-basic-ui/index.css';

window.Kakao.init('eb277f8460b80d0c739e75e5ea9ba217'); //보안처리 필요
window.Kakao.isInitialized(); // init되면 true, 아니면 false를 반환한다

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
);
