
export const addField = (fieldName, structure, setData, prevData) => {
    setData((prevData) => ({
        ...prevData,
        [fieldName]: [...prevData[fieldName], { ...structure }],
    }));
};

export const handleFieldChange = (fieldName, e, index, setData, prevData) => {
    const { name, value } = e.target;
    const newData = { ...prevData };
    newData[fieldName][index][name] = value;
    setData(newData);
};