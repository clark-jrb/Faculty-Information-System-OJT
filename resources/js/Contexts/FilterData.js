import React, { createContext, useContext, useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';

const FilterDataContext = createContext();

export const FilterDataProvider = ({ children }) => {
    const [selectedRank, setSelectedRank] = useState('');
    const [selectedDegree, setSelectedDegree] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [activeDept, setActiveDept] = useState('');
    const [filters, setFilters] = useState([{ rank: '', degree: '', department: '' }]);
    const [specific, setSpecific] = useState([{ faculty_id: '', toPrint: '' }]);
    const [toPrint, setToPrint] = useState('');

    useEffect(() => {
        if (!selectedRank && !selectedDegree && !selectedDepartment) {
            // console.log('Nothing to filter');
            return
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

    const handleResetSpecific = () => {
        setToPrint('')
        setSpecific({
            faculty_id: '',
            toPrint: ''
        })
    }

    const handleToPrint = (e, id) => {
        setToPrint(e.target.value)
        setSpecific({
            faculty_id: id,
            toPrint: e.target.value
        })
    }

    const handleActiveDept = (e) => {
        setActiveDept(e)
    }

    useEffect(() => {
        console.log(specific);
    }, [specific]);

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
            handleResetFilter,
            specific,
            handleToPrint,
            toPrint,
            handleResetSpecific
        }}>
            {children}
        </FilterDataContext.Provider>
    );
};

export const useFilterDataContext = () => {
    return useContext(FilterDataContext)
}