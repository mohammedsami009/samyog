import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Chakravyuha from './components/Chakravyuha';
import Events from './components/Events';
import Timeline from './components/Timeline';
import Team from './components/Team';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Chakravyuha />
        <Events />
        <Timeline />
        <Team />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}

export default App;
