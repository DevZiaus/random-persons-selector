const Footer = () => {
  return (
    <footer className='container flex justify-center bg-sky-400 p-4 mb-8 rounded mx-auto'>
      <p className='text-white'>&copy; {new Date().getFullYear()} DevZiaus</p>
    </footer>
  );
};

export default Footer;
