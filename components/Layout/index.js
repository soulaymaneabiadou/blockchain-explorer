import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <div className='z-0'>
      <Header />

      <main className='container mx-auto px-4 sm:px-6 mt-8 z-n1'>
        {children}
      </main>
    </div>
  );
};

export default Layout;
