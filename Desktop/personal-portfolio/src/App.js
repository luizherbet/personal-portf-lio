import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Main />
    </div>
  );
}

export default App;
