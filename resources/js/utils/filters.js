
export const filterFaculty = (facultyData, selectedRank, selectedDegree) => {
    if (selectedRank === '' && selectedDegree === '') {
        return facultyData;
    } else {
        const rankFilter = selectedRank === '' ? () => true : faculty => new RegExp(`^${selectedRank} [IVX]+$`).test(faculty.position);
        const degreeFilter = selectedDegree === '' ? () => true : faculty => faculty.high_degree === selectedDegree;
        
        return facultyData.filter(faculty => rankFilter(faculty) && degreeFilter(faculty));
    }
};

export const searchFaculty = (facultyData, searchName) => {
    if (!searchName.trim()) {
        // If searchName is empty or contains only whitespace, return an empty array
        return [];
    } else {
        // Filter facultyData based on the searchName
        return facultyData.filter(faculty => {
            const fullName = `${faculty.fname} ${faculty.lname}`;
            // Convert both name and search term to lowercase for case-insensitive comparison
            return fullName.toLowerCase().includes(searchName.toLowerCase());
        });
    }
}

// export const filterFacultyByRank = (facultyData, selectedRank) => {
//     if (selectedRank === '') {
//         return facultyData;
//     } else {
//         const regex = new RegExp(`^${selectedRank} [IVX]+$`);
//         return facultyData.filter(faculty => regex.test(faculty.position));
//     }
// };

// export const filterFacultyByDegree = (facultyData, selectedDegree) => {
//     if (selectedDegree === '') {
//         return facultyData;
//     } else {
//         return facultyData.filter(faculty => faculty.high_degree === selectedDegree);
//     }
// };
