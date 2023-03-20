import './App.css';
import Header from './components/Header/Header';
import Loading from './components/Loading';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="full-space">
        <Loading />
      </div>
    </div>
  );
}

export default App;
