import React,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'

import './style.scss';

/**
 * Fetch pokemon name in french
 */
const PokemonName = ({ url }) => {

    const [pokemon,setPokemon] = useState();
  
    const fetchPokemon = async () => {
      console.log({url});
      try {
          const response = await axios.get(url);
          console.log('data pokcard',response.data);
          setPokemon({
              name: response.data.names.find(element => element.language.name === 'fr').name,
              id: response.data.id 
          });
      }
      catch (error) {
          console.log(error);
      }
  };
  
    useEffect(()=> {
      fetchPokemon();
    },[])

    // Basic Loader
    if (!pokemon) return (<div>Loading</div>);
  
    return (
    <h2 className="pokemon-name">{`#${pokemon.id} ${pokemon.name}`}</h2>
  );}
  
  PokemonName.propTypes = {
    url: PropTypes.string.isRequired,
  }
  

export default PokemonName;
