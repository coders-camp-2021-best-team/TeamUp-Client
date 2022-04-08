import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';

import { App } from './App';

const queryClient = new QueryClient();

ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <React.StrictMode>
            <ToastContainer />
            <App />
        </React.StrictMode>
    </QueryClientProvider>,
    document.getElementById('root')
);
