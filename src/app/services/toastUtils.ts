import { toast } from 'react-toastify';

/**
 * Utility function to show a success toast.
 * @param message - The success message to show.
 */
export const showSuccessToast = (message: string) => {
    toast.success(message, {
        position: "top-right",  // You can change position here
        style: {
            backgroundColor: "#4CAF50", // Green color for success
            color: "#fff",
            fontSize: "16px",
            padding: "10px",
        },
    });
};

/**
 * Utility function to show an error toast.
 * @param message - The error message to show.
 */
export const showErrorToast = (message: string) => {
    toast.error(message, {
        position: "top-right",  // You can change position here
        style: {
            backgroundColor: "#f44336", // Red color for error
            color: "#fff",
            fontSize: "16px",
            padding: "10px",
        },
    });
};
