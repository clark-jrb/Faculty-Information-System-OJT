import React, { createContext, useContext, useState } from 'react';

const EditContext = createContext();

export const EditProvider = ({ children }) => {
    const [checked, setChecked] = useState(false);

    // You can define functions to update state here
    const handleChecked = () => {
        setChecked(!checked);
    };

    return (
        <EditContext.Provider value={{ checked, handleChecked }}>
            {children}
        </EditContext.Provider>
    );
};

export const useEditContext = () => {
    return useContext(EditContext)
}