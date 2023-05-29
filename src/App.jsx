import './App.css';
import { Routes, Route } from 'react-router-dom';
import HeaderNavBar from './components/HeaderNavBar/HeaderNavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Cab from './pages/Cab';
import Booking from './pages/Booking';
import FailedPayment from './pages/FailedPayment';
import Example from './components/FilteredTable/filter';

function App() {
  return (
    <>
      <HeaderNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cab" element={<Cab />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/failed" element={<FailedPayment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
