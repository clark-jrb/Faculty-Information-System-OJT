
export const filterFaculty = (facultyData, selectedRank, selectedDegree) => {
    if (selectedRank === '' && selectedDegree === '') {
        return facultyData;
    } else {
        const rankFilter = selectedRank === '' ? () => true : faculty => new RegExp(`^${selectedRank} [IVX]+$`).test(faculty.position);
        const degreeFilter = selectedDegree === '' ? () => true : faculty => faculty.high_degree === selectedDegree;
        return facultyData.filter(faculty => rankFilter(faculty) && degreeFilter(faculty));
    }
};

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
