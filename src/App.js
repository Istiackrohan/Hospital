import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Auth/Login';
import ServiceDetails from './Pages/Service/ServiceDetails';
import DepartmentDetails from './Pages/Department/DepartmentDetails';
import Error from './Pages/Error/Error';
import CreateAccount from './Pages/Auth/CreateAccount';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<CreateAccount/>}/>
        <Route path="/service/:serviceid" element={<ServiceDetails/>}/>
        <Route path="/department/:id" element={<DepartmentDetails/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
