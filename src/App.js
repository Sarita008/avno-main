import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Navbar/Navbar';
import Home from './pages/Home/Home';
import AllRoutes from './AllRoutes/AllRoutes';
import Footer from './pages/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
