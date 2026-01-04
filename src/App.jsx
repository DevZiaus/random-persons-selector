import Footer from './components/Footer';
import Header from './components/Header';
import MainSection from './components/MainSection';
import PersonProvider from './contexts/Person';

const App = () => {
    return (
        <>
            <Header />
            <PersonProvider>
                <MainSection />
            </PersonProvider>
            <Footer />
        </>
    );
};

export default App;
