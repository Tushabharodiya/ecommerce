import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


let successAlert = (message) => {
    toast.success(`🦄 ${message}`, {
        position: "top-right",
        theme: "light",
    });
}

let errorAlert = (message) => {
    toast.error(`🦄 ${message}`, {
        position: "top-right",
        theme: "light",
    })
}

export { successAlert, errorAlert }