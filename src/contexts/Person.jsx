import { createContext, useState } from 'react';

export const PersonContext = createContext();

const PersonProvider = ({ children }) => {
    const [personList, setPersonList] = useState([]);
    const [selectedPersons, setSelectedPersons] = useState([]);
    const [randomPersonCount, setRandomPersonCount] = useState(2);

    const handleSubmit = (e) => {
        e.preventDefault();
        const names = e.target.elements.personList.value;
        // Check empty input
        if (!names) {
            alert("Please enter at least one name.");
            return;
        }

      // Check invalid characters (only letters, commas, spaces allowed)
      const validPattern = /^[a-zA-Z\s,]+$/;

      if (!validPattern.test(names)) {
          alert("Only letters, commas, and spaces are allowed.");
          return;
      }
        
      const presentPersons = names
          .split(",")
          .map(name => name.trim())
          .filter(Boolean);
           setPersonList(prev => [...prev, ...presentPersons]);
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
        setSelectedPersons(selectRandomPersons(randomPersonCount));
    };

    return (
        <PersonContext.Provider
            value={{
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

