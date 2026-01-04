import { useContext } from 'react';
import { PersonContext } from '../contexts/Person';
import Headline from './Headline';
import Button from './Button';

const RandomPersonCount = () => {
    const { handleSelect } = useContext(PersonContext);

    return (
        <div className='flex flex-col items-center justify-center mt-5'>
            <Headline
                as='label'
                text='How many random person do you want?'
                className='block text-lg font-medium mb-2'
                htmlFor='randomCount'
            />
            <form
                className='flex items-center justify-center'
                onSubmit={handleSelect}
            >
                <input
                    className='w-1/3 px-2 py-0.5 h-10 border border-gray-300 rounded focus:outline-0 focus:border-blue-500'
                    type='number'
                    id='randomCount'
                    placeholder='2'
                />
                <Button
                    type='submit'
                    className='bg-blue-500 text-white px-4 py-2 rounded my-4 hover:bg-blue-600 transition-colors duration-300'
                    text='Select Random Persons'
                />
            </form>
        </div>
    );
};

export default RandomPersonCount;
