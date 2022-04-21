import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';

import { App } from './App';
import { toastNotify } from './utils/ToastNotify';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            onError: (err) => {
                if (axios.isAxiosError(err)) {
                    return toastNotify(err.response?.status);
                }
                return toastNotify();
            }
        }
    }
});

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ToastContainer />
            <App />
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
