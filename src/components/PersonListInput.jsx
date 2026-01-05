import { useContext } from 'react';
import { PersonContext } from '../contexts/Person';
import Headline from './Headline';
import Button from './Button';

const PersonListInput = () => {
  const { handleSubmit } = useContext(PersonContext);

  return (
    <div className='mt-5 max-w-md mx-auto'>
      <form onSubmit={handleSubmit}>
        <Headline
          as='label'
          text='Enter a list of people (comma-separated):'
          className='block text-lg font-medium mb-2'
          htmlFor='personList'
        />

        <div className='flex justify-between items-center'>
          <input
            id='personList'
            type='text'
            name='personList'
            className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-0 focus:border-blue-500'
            placeholder='e.g., John, Jane, Bob, Alice'
          />
          <Button
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300'
            text='Submit'
          />
        </div>
      </form>
    </div>
  );
};

export default PersonListInput;
