import { Switch, Route } from 'react-router-dom'

import './style.scss';
import Nav from '../Nav';
import TypeList from '../TypeList';
import PokemonList from '../PokemonList';

/**
 * Component that render the whole Pokedex
 */
function Pokedex() {
  return (
    <div className="pokedex">
     <Nav />
        <Route path="/types">
            <TypeList />
        </Route>
        <Route path="/">
          <PokemonList />
        </Route>
        
        {/* <Error /> */}
    </div>
  );
}

export default Pokedex;
