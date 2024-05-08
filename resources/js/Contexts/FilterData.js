import React, { createContext, useContext, useState, useEffect } from 'react';

const FilterDataContext = createContext();

export const FilterDataProvider = ({ children }) => {
    const [selectedRank, setSelectedRank] = useState('');
    const [selectedDegree, setSelectedDegree] = useState('');
    const [filters, setFilters] = useState([{ rank: '', degree: ''}]);

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

    const handleResetFilter = () => {
        setSelectedRank('')
        setSelectedDegree('')
        setFilters(prevState => ({
            ...prevState,
            rank: '',
            degree: ''
        }))
    }

    return (
        <FilterDataContext.Provider value={{ 
            selectedRank,
            selectedDegree,
            handleSelectedRank,
            handleSelectedDegree,
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