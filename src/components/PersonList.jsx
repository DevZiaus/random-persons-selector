import { useContext } from 'react';
import { PersonContext } from '../contexts/Person';
import Headline from './Headline';

const PersonList = () => {
    const { personList } = useContext(PersonContext);

    return (
        <div className='mt-5 max-w-md mx-auto'>
            <Headline
                as='h3'
                text='Person List'
                className='font-bold text-2xl mb-5 text-white bg-sky-500 p-4 text-center rounded'
            />
            <p className='font-bold text-lg my-5'>
                Total {personList.length} Person Present Right Now.
            </p>
            <div className='flex flex-col justify-center'>
                <ul className='grid grid-cols-3 list-disc max-w-full list-inside'>
                    {personList.map((person, index) => (
                        <li key={index}>{person}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PersonList;
