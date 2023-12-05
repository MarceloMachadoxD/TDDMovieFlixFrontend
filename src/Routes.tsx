import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import Movies from 'pages/Movies';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
