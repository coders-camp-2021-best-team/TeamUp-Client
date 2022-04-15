import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';

import { App } from './App';

export const queryClient = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ToastContainer />
            <App />
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
