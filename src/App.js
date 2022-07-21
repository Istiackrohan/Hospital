import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Auth/Login';
import ServiceDetails from './Pages/Service/ServiceDetails';
import DepartmentDetails from './Pages/Department/DepartmentDetails';
import Error from './Pages/Error/Error';
import CreateAccount from './Pages/Auth/CreateAccount';
import Booking from './Pages/Booking/Booking';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<CreateAccount />} />
          <Route path="/service/:serviceid" element={<ServiceDetails />} />
          <Route path="/service/:serviceid/:bookingid" element={<Booking />} />
          <Route path="/department/:id" element={<DepartmentDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
