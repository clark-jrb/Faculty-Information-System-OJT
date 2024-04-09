import React, { createContext, useContext, useState } from 'react';

const NotifContext = createContext();

export const NotifProvider = ({ children }) => {
    const [notif, setNotif] = useState(false);
    const [message, setMessage] = useState('');

    // You can define functions to update state here
    const updateNotif = (item) => {
        setNotif(item);
    };

    const updateMessage = (item) => {
        setMessage(item);
    };

    return (
        <NotifContext.Provider value={{ notif, updateNotif, message, updateMessage }}>
            {children}
        </NotifContext.Provider>
    );
};

export const useNotifContext = () => {
    return useContext(NotifContext)
}