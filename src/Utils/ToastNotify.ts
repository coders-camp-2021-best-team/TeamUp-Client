import 'react-toastify/dist/ReactToastify.css';

import { toast, ToastOptions } from 'react-toastify';

const succesStyles: ToastOptions = {
    position: 'bottom-right',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined
};

const errorStyles: ToastOptions = {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined
};

export const toastNotify = (status = 2137, text?: string) => {
    switch (status) {
        case 400:
            return toast.error(
                text || 'Bad request, try something else!',
                errorStyles
            );
        case 401:
            return toast.error(text || 'Unauthorized');
        case 404:
            return toast.error(text || 'Not Found');
        case 500:
            return toast.info(text || 'Internal server error, try again later');
        case 200:
            return toast.success(text || 'Success!!', succesStyles);
        default:
            return toast.error(text || 'Unknown error');
    }
};
