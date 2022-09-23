import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import CountriesTable from './components/CountriesTable';

function App() {
  return (
    <div className="App">
          <div className='container-fluid'>
            <CountriesTable />
          </div>
    </div>
  );
}

export default App;
