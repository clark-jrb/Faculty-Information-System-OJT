
export const filterFacultyByRank = (facultyData, selectedRank) => {
    if (selectedRank === '') {
        return facultyData;
    } else {
        const regex = new RegExp(`^${selectedRank} [IVX]+$`);
        return facultyData.filter(faculty => regex.test(faculty.position));
    }
};