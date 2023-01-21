// import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'


function App() {
  return (
    
    <BrowserRouter>
<Routes>
  <Route path='/' element={

    <div className="container" >
      <LoginPage />
    </div>
  } />

<Route path='register' element={

<div className="container" >
  <RegisterPage />

</div>
} />
  

</Routes>
</BrowserRouter>
  );
}

export default App;

