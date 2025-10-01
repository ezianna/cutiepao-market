import React, { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Welcome to Cutiepao! 🎉" },
    { id: 2, message: "Flash Sale is live now! 🔥" },
    { id: 3, message: "Your order has been shipped 🚚" },
  ]);

  const addNotification = (message) => {
    const newNotification = {
      id: Date.now(),
      message
    };
    setNotifications(prev => [...prev, newNotification]);
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const clearNotifications = () => setNotifications([]);

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, removeNotification, clearNotifications }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  return useContext(NotificationContext);
}