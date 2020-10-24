import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />

      <Feed />
      <hr/>
    </div>
  );
}

export default App;
