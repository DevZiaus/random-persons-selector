import { useContext } from 'react';
import { PersonContext } from '../contexts/Person';
import Headline from './Headline';

const SelectedPersons = () => {
  const { selectedPersons } = useContext(PersonContext);

  return (
    <div className='mt-5 max-w-md mx-auto'>
      <Headline
        as='h3'
        text='Selected Persons'
        className='font-bold text-2xl mb-5 text-white bg-sky-500 p-4 text-center rounded'
      />

      <ul className='grid grid-cols-2 list-disc list-inside'>
        {selectedPersons.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedPersons;
