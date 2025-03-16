import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const ToastWrapper = () => {
    return (
        <ToastContainer
            position="top-right"  // Keep toast at the top-right
            autoClose={5000}
            hideProgressBar={false}  // Make sure the progress bar is visible
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            progressClassName="toast-progress"  // Custom class for progress bar
            style={{ zIndex: 9999 }}  // Ensure it's above other content
        />
    );
};

export default ToastWrapper;
