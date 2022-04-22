import 'react-toastify/dist/ReactToastify.css';

import { getReasonPhrase } from 'http-status-codes';
import { toast, ToastOptions } from 'react-toastify';

const styles: ToastOptions = {
    position: 'bottom-right',
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false
};

const succesStyles: ToastOptions = {
    ...styles,
    autoClose: 3000
};

const errorStyles: ToastOptions = {
    ...styles,
    autoClose: 5000
};

export const toastNotify = (
    status = 500,
    text: string = getReasonPhrase(status)
) => {
    const statusGroup = Math.floor(status / 100);

    if (statusGroup === 2) {
        toast.success(text, succesStyles);
    } else if (statusGroup === 4 || statusGroup === 5) {
        toast.error(text, errorStyles);
    } else {
        toastNotify(500);
    }
};
