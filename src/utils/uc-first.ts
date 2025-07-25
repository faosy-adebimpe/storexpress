const ucFirst = (value: string) => {
    const firstLetter = value[0].toUpperCase();
    const otherLetters = value.slice(1).toLowerCase();
    const newValue = `${firstLetter}${otherLetters}`;
    return newValue;
};

export default ucFirst;
