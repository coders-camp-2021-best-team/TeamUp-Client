import 'react-toastify/dist/ReactToastify.css';

import { toast } from 'react-toastify';

export const toastNotify = (status: number, text?: string) => {
    switch (status) {
        case 400:
            return toast.error(
                text ? text : 'Bad request, try something else!',
                {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined
                }
            );
        case 401:
            return toast.error(text ? text : 'Unauthorized');
        case 404:
            return toast.error(text ? text : 'Not Found');
        case 500:
            return toast.info(
                text ? text : 'Internal server error, try again later'
            );
        case 200:
            return toast.success(text ? text : 'Success!!', {
                position: 'bottom-right',
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined
            });
        default:
            return;
    }
};
