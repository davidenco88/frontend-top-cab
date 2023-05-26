import './App.css';
import { Routes, Route } from 'react-router-dom';
import HeaderNavBar from './components/HeaderNavBar/HeaderNavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Cab from './pages/Cab';
import HowToGet from './components/HowtoGet/HowtoGet';
import StepsToUse from './components/StepsToUse/StepsToUse';
import WhyUse from './components/WhyUse/WhyUse';

function App() {
  return (
    <>
      <HeaderNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cab" element={<Cab />} />
      </Routes>
      <Footer />
      <StepsToUse/>
      <WhyUse/>
      <HowToGet/>
    </>
  );
}

export default App;

