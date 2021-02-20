import { Switch, Route } from 'react-router-dom'

import './style.scss';
import Nav from '../Nav';
import TypeList from '../TypeList';

function Pokedex() {
  return (
    <div className="pokedex">
     <Nav />
        <Route exact path="/">
          HomeList
        </Route>
        <Route path="/types">
          <TypeList />
        </Route>
        {/* <Error /> */}
    </div>
  );
}

export default Pokedex;
