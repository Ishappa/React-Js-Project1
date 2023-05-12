import './App.css';
import Navbar from './Navbar';
import Home from './Home'
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Animedetails from './Animedetails';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path="/">
      <Home/>
      </Route>
      <Route  path="/Animedetails:mal_id">
      <Animedetails/>
      </Route>
    </Switch>
    </BrowserRouter>
    
    </div>
  );
}

export default App;