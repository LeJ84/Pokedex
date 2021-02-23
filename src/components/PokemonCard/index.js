import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'

import PokemonName from './PokemonName'
import './style.scss';

const PokemonCard = ({ pokemonUrl, index, detailed, setDetailed }) => {

  const [pokemon,setPokemon] = useState();
  //const [detailed,setDetailed] = useState(false); 

  const fetchPokemon = async () => {
    //console.log('pokemonurl',pokemonUrl);
    try {
        const response = await axios.get(pokemonUrl);
        //console.log('data pokcard',response.data);
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

  //console.log({setDetailed})

  const handleClick = () => {
    if (detailed) { 
      setDetailed(-1);
      window.location.href = "#"+index;
    } 
    else { 
      setDetailed(index);
    }
    window.scrollTo(0, 0);
  };

  // Basic Loader
  if (!pokemon) return (<div>Loading</div>);

  if (!pokemon.imageUrl) return null;

  if (detailed) {
    return (
      <div className="pokemon-card pokemon-card--detailed" onClick={handleClick} id={index}>
        <img src={pokemon.imageUrl} alt={pokemon.name}/>
        <PokemonName url={pokemon.frenchNameUrl}/>
        GROS DETAILS BIEN LOURD
      </div>
    )
  }

  return (
  <div className="pokemon-card" onClick={handleClick}>
    <img src={pokemon.imageUrl} alt={pokemon.name}/>
    <PokemonName url={pokemon.frenchNameUrl}/>
  </div>
);}

PokemonCard.propTypes = {
  pokemonUrl: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}

export default PokemonCard;
