import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Header} from './Components/Common/Header';
import { Footer } from './Components/Common/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Template } from './Components/authentication/Template';
import { Login } from './Components/authentication/Login';
import { Signup } from './Components/authentication/Signup';
import { Topics } from './Components/Topics/Topics';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Template children={<Login />} /> } />
        <Route path="/signup" element={<Template children={<Signup />} />} />
        <Route path="/topics" element={<Topics />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
