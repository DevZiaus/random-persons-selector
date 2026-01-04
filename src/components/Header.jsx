import Headline from './Headline';

const Header = () => {
    return (
        <header className='container flex justify-center bg-sky-400 p-4 mb-8 rounded mx-auto'>
            <Headline
                as='h1'
                text='Random Person Selector'
                className='text-white font-bold text-3xl'
            />
        </header>
    );
};

export default Header;
