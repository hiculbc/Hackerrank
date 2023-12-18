import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { Header} from './Components/Common/Header';
import { Footer } from './Components/Common/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Template } from './Components/authentication/Template';
import { Login } from './Components/authentication/Login';
import { Signup } from './Components/authentication/Signup';
import { Topics } from './Components/Topics/Topics';
import {QueryClientProvider,QueryClient } from 'react-query';
import { CodeEditor } from './Components/Editor/CodeEditor';

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <BrowserRouter>
      <QueryClientProvider client={queryClient}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Template children={<Login />} /> } />
        <Route path="/signup" element={<Template children={<Signup />} />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/question/:id" element={<CodeEditor />} />
        </Routes>
        <Footer />
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
