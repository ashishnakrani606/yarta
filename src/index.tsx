import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { IntercomProvider } from 'react-use-intercom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const INTERCOM_APP_ID = 'e8zen1ot';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.render(
  <IntercomProvider appId={INTERCOM_APP_ID}>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  </IntercomProvider>,
  document.getElementById('root')
);

reportWebVitals();