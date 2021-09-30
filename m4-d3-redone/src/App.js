import './App.css';
// import './components/WarningSign'
import WarningSign from './components/WarningSign';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WarningSign  text="Here's a warning"/>
      </header>
    </div>
  );
}

export default App;
