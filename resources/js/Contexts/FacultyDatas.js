import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const FacultyDataContext = createContext();

export const FacultyDataProvider = ({ children }) => {
    const [facultyData, setFacultyData] = useState([]);

    useEffect(() => {
        // Fetch data when component mounts
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/faculty'); // Adjust the endpoint to your route
            setFacultyData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        console.log(facultyData);
    }, [facultyData]);

    return (
        <FacultyDataContext.Provider value={ facultyData }>
            {children}
        </FacultyDataContext.Provider>
    );
};

export const useFacultyDataContext = () => {
    return useContext(FacultyDataContext)
}