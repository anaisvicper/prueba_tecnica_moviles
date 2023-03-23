import { createContext, useState } from 'react';

export const ToastContext = createContext();

const ToastContextProvider = ({ children }) => {
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('success');
  const possibleSeverity = {
    error: 'error',
    warning: 'warning',
    info: 'info',
    success: 'success',
  };
  const handleMessage = (newMessage) => {
    setMessage(newMessage);
  };
  const handleSeverity = (newSeverity) => {
    setSeverity(newSeverity);
  };
  const handleReset = () => {
    setMessage('');
    setSeverity('success');
  };

  const value = {
    message,
    severity,
    handleMessage,
    handleSeverity,
    possibleSeverity,
    handleReset,
  };
  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};

export default ToastContextProvider;
