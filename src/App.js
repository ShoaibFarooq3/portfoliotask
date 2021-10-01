import './App.css';
import Navbar from '../src/Components/Navbar/Navbar';
import About from './Components/About/About';
import Banner from './Components/Banner/Banner';
import Portfolio from './Components/Portfolio/Portfolio';
import Capabilities from './Components/Capabilities/Capabilities';
import ClientReview from './Components/ClientReview/ClientReview';
import HireMe from './Components/HireMe/HireMe';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Banner />
      <Portfolio />
      <Capabilities />
      <ClientReview />
      <HireMe />
      <Footer />
    </div>
  );
}

export default App;
