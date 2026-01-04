import { createContext, useState } from 'react';

export const PersonContext = createContext();

const PersonProvider = ({ children }) => {
    const [personList, setPersonList] = useState([]);
    const [selectedPersons, setSelectedPersons] = useState([]);
    const [randomPersonCount, setRandomPersonCount] = useState(2);

    //   const selectRandomPersons = (count) => {
    //     const shuffled = [...personList].sort(() => 0.5 - Math.random());
    //     return shuffled.slice(0, count);
    //   };

    const handleSubmit = (e) => {
        e.preventDefault();
        const names = e.target.elements.personList.value;
        const presentPersons = names
            .split(',')
            .map((name) => name.trim())
            .filter((name) => name);
        setPersonList([...personList, ...presentPersons]);
        e.target.reset();
    };

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

        const randomCount = Number(e.target.elements.randomCount.value);
        setRandomPersonCount(randomCount);

        const selected = selectRandomPersons(randomCount);
        setSelectedPersons(selected);
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
