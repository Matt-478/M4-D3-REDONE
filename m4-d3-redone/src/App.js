import './App.css';
// import './components/WarningSign'
import WarningSign from './components/WarningSign';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyBadge from './components/MyBadge'
import SingleBook from './components/SingleBook'
import fantasyBooks from './fantasy.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WarningSign  text="Here's a warning"/>
        <MyBadge color="success" text="A little surprise"/>
        <SingleBook book={fantasyBooks[0]}/>
      </header>
    </div>
  );
}

export default App;
