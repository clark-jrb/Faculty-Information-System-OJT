
export const filterFacultyByRank = (facultyData, selectedRank) => {
    return selectedRank === '' ? facultyData : facultyData.filter(faculty => faculty.position === selectedRank);
};