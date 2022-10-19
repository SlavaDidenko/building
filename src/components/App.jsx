import Achievement from './Achievement/Achievement';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';

export const App = () => {
  return (
    <div className=' z-20 overflow-hidden relative'>
      <Header />
      <main className=''>
        <Hero />
        <Achievement />
        <Section1 />
        <Section2 />
        <Section3 />
      </main>
        <Footer/>
    </div>
  );
};
