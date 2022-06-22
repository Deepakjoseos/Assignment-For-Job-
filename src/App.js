import './App.css';
import Card from './components/card/Card';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
