import './App.css';
import { Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage.js'
import Home from './Components/Home.js'
import Detail from './Components/Detail.js'
import FormActivity from './Components/FormActivity.js'

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/Home">
        <Home />
      </Route>
      <Route path="/Detail/:id">
        <Detail />
      </Route>
      <Route path="/Create">
        <FormActivity />
      </Route>

    </div>
  );
}

export default App;
