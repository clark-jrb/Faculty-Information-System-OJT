import React, { createContext, useContext, useState, useEffect } from 'react';

const FilterDataContext = createContext();

export const FilterDataProvider = ({ children }) => {
    const [selectedRank, setSelectedRank] = useState('');
    const [selectedDegree, setSelectedDegree] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [filters, setFilters] = useState([{ rank: '', degree: '', department: '' }]);

    const handleSelectedRank = (e) => {
        setSelectedRank(e.target.value);
        setFilters(prevState => ({
            ...prevState,
            rank: e.target.value
        }))
    };

    const handleSelectedDegree = (e) => {
        setSelectedDegree(e.target.value);
        setFilters(prevState => ({
            ...prevState,
            degree: e.target.value
        }))
    };

    const handleSelectedDepartment = (dept) => {
        setSelectedDepartment(dept);
        setFilters(prevState => ({
            ...prevState,
            department: dept
        }))
    };

    const handleResetFilter = () => {
        setSelectedRank('')
        setSelectedDegree('')
        setSelectedDepartment('')
        // setFilters(prevState => ({
        //     ...prevState,
        //     rank: '',
        //     degree: '',
        //     department: ''
        // }))
    }

    return (
        <FilterDataContext.Provider value={{ 
            selectedRank,
            selectedDegree,
            selectedDepartment,
            handleSelectedRank,
            handleSelectedDegree,
            handleSelectedDepartment,
            filters,
            handleResetFilter
        }}>
            {children}
        </FilterDataContext.Provider>
    );
};

export const useFilterDataContext = () => {
    return useContext(FilterDataContext)
}