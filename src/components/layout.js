import Navbar from './navbar/navbarComponent.tsx';
import Header from './header/headerComponet.tsx'

const Layout = ({ children }) => {
  return (
    <>
        <Header/>
        <Navbar />
        <main>{children}</main>
    </>
  );
};

export default Layout;
