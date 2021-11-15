import './App.css';
import Login from './components/Login';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import RegisterCourse from './components/RegisterCourse';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<RegisterCourse/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
