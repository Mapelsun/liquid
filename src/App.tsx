import './App.scss';
import Footer from './components/Footer';
import Graph from './components/Graph';
import Header from './components/Header';
import Info from './components/Info';

function App() {
  return (
    <div className="app">
      <Header />
      <Info />
      <Graph />
      <Footer />
    </div>
  );
}

export default App;
