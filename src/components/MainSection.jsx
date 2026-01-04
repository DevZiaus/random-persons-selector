import { useContext } from 'react';
import { PersonContext } from '../contexts/Person';

import PersonList from './PersonList';
import PersonListInput from './PersonListInput';
import SelectedPersons from './SelectedPersons';
import Headline from './Headline';
import RandomPersonCount from './RandomPersonCount';

const Main = () => {
    const { personList, selectedPersons } = useContext(PersonContext);
    return (
        <main className='container mx-auto p-4 min-h-[75vh]'>
            <Headline
                as='h2'
                text='Welcome to the Random Person Selector!'
                className='text-center text-2xl mb-6 font-semibold'
            />
            <PersonListInput />
            {personList.length > 0 && (
                <>
                    <PersonList />
                    <RandomPersonCount />
                    {selectedPersons.length > 0 && <SelectedPersons />}
                </>
            )}
        </main>
    );
};

export default Main;
