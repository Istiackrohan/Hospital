import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import ServiceDetails from './Pages/Service/ServiceDetails';
import DepartmentDetails from './Pages/Department/DepartmentDetails';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/service:id" element={<ServiceDetails/>}/>
        <Route path="/department:id" element={<DepartmentDetails/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
