import { createContext, useState } from 'react';

export const PersonContext = createContext();

const PersonProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [personList, setPersonList] = useState([]);
  const [selectedPersons, setSelectedPersons] = useState([]);
  const [randomPersonCount, setRandomPersonCount] = useState(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    const rawInput = e.target.elements.personList.value.trim();

    // Empty input validation
    if (!rawInput) {
      setError(new Error('Input cannot be empty'));
      return;
    }

    // Character validation
    const validPattern = /^[a-zA-Z\s,.'-]+$/;
    if (!validPattern.test(rawInput)) {
      setError(
        new Error(
          'Only letters, commas, dots, apostrophes, and hyphens are allowed'
        )
      );
      return;
    }

    // Split & normalize
    const nameList = rawInput
      .split(',')
      .map((name) => name.trim())
      .filter(Boolean);

    // Length validation
    const shortName = nameList.find((name) => name.length < 3);
    if (shortName) {
      setError(
        new Error(`Name "${shortName}" must be at least 3 characters long`)
      );
      return;
    }

    // Remove duplicates (case-insensitive)
    const existingNames = new Set(personList.map((name) => name.toLowerCase()));

    const uniqueNames = nameList.filter(
      (name) => !existingNames.has(name.toLowerCase())
    );

    if (uniqueNames.length === 0) {
      setError(new Error('All names already exist in the list'));
      return;
    }

    // Update state
    setPersonList((prev) => [...prev, ...uniqueNames]);
    e.target.reset();
  };

  //   const selectRandomPersons = (count) => {
  //     const shuffled = [...personList].sort(() => 0.5 - Math.random());
  //     return shuffled.slice(0, count);
  //   };

  const selectRandomPersons = (count) => {
    const shuffled = [...personList];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
  };

  const handleSelect = (e) => {
    e.preventDefault();
    if (randomPersonCount > personList.length) {
      setError(new Error('Not enough persons to select from!'));
      return;
    }
    setSelectedPersons(selectRandomPersons(randomPersonCount));
  };

  return (
    <PersonContext.Provider
      value={{
        error,
        setError,
        personList,
        setPersonList,
        selectedPersons,
        setSelectedPersons,
        selectRandomPersons,
        randomPersonCount,
        setRandomPersonCount,
        handleSelect,
        handleSubmit,
      }}
    >
      {children}
    </PersonContext.Provider>
  );
};

export default PersonProvider;
