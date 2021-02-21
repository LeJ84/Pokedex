import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'

import PokemonName from './PokemonName'
import './style.scss';

const PokemonCard = ({ pokemonUrl, index }) => {

  const [pokemon,setPokemon] = useState();

  const fetchPokemon = async () => {
    console.log('pokemonurl',pokemonUrl);
    try {
        const response = await axios.get(pokemonUrl);
        console.log('data pokcard',response.data);
        setPokemon({
          id : response.data.id,
          imageUrl: response.data.sprites.other["official-artwork"].front_default,
          frenchNameUrl: response.data.species.url,
          name : response.name
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
  <div className="pokemon-card">
    <img src={pokemon.imageUrl} alt={pokemon.name}/>
    <PokemonName url={pokemon.frenchNameUrl}/>
  </div>
);}

PokemonCard.propTypes = {
  pokemonUrl: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}

export default PokemonCard;
