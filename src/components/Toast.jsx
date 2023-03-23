import './App.css';
import { useContext } from 'react';
import { ToastContext } from './ToastContext';
import { Alert, Snackbar } from '@mui/material';

const Toast = () => {
  const { message, severity, handleReset } = useContext(ToastContext);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    handleReset();
  };

  return (
    <Snackbar open={!!message} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
