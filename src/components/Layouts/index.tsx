import Header from '../Header/';
import Footer from '..//Footer';
const  DefaultLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default DefaultLayout;
