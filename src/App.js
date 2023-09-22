import React, {Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import Productos from './Componentes/Productos';

function App() {
  return (
    <Fragment>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/home">
                Página principal
              </Link>
            </li>
            <li>
              <Link to="/productos">
                Galeria
              </Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/productos">
            <Productos />
          </Route>
          <Route path="/home">
            <Productos/>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
