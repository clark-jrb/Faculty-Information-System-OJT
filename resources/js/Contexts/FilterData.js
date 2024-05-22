import React, { createContext, useContext, useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';

const FilterDataContext = createContext();

export const FilterDataProvider = ({ children }) => {
    const [selectedRank, setSelectedRank] = useState('');
    const [selectedDegree, setSelectedDegree] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [activeDept, setActiveDept] = useState('');
    const [filters, setFilters] = useState([{ rank: '', degree: '', department: '' }]);

    useEffect(() => {
        if (selectedRank === '' && selectedDegree === '' && selectedDepartment === '') {
            console.log('Nothing to filter');
        } else {
            Inertia.get('/admin/faculties', filters)
        }
    }, [filters]);

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
        setActiveDept('')
        setFilters(prevState => ({
            ...prevState,
            rank: '',
            degree: '',
            department: ''
        }))
    }

    const handleActiveDept = (e) => {
        setActiveDept(e)
    }

    // useEffect(() => {
    //     console.log(filters);
    // }, [filters]);

    return (
        <FilterDataContext.Provider value={{ 
            selectedRank,
            selectedDegree,
            selectedDepartment,
            activeDept,
            handleSelectedRank,
            handleSelectedDegree,
            handleSelectedDepartment,
            handleActiveDept,
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