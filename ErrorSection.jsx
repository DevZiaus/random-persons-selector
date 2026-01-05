import { useContext } from 'react';
import { PersonContext } from '../contexts/Person';
import Headline from './Headline';

const ErrorSection = () => {
  const { error } = useContext(PersonContext);
  return (
    <div className='mt-5 max-w-md mx-auto'>
      {error && (
        <Headline as='h2' text={error.message} className='mt-4 text-red-600' />
      )}
    </div>
  );
};

export default ErrorSection;
