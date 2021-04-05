import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />

      <main className='container mx-auto px-4 sm:px-6 mt-8'>{children}</main>
    </div>
  );
};

export default Layout;
