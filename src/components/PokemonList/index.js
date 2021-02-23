import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import PokemonCard from '../PokemonCard';
import './style.scss';

const PokemonList = ({pokemons}) => {

    const [pokemonList, setPokemonList] = useState(pokemons);
    const [detailed, setDetailed] = useState(-1);
    const [nextFetchUrl, setNextFetchUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
    //const [nextFetchUrl, setNextFetchUrl] = useState('https://pokeapi.co/api/v2/pokemon/?offset=000&limit=2000');
    console.log({nextFetchUrl});
    /**
     * Fetch the Urls' Pokemon Details 
     */
    const fetchPokemons = async () => {
        console.log('render');
        try {
            const response = await axios.get(nextFetchUrl)
            console.log({response});
            const fetchedUrl = []
            response.data.results.forEach(element => {
                fetchedUrl.push({
                    ...element
                });
            });
            setPokemonList([...pokemonList,...fetchedUrl]);
            setNextFetchUrl(response.data.next);
        }
        catch (error) {
            console.log(error);
        }
    };

    // At first render fetch from API
    useEffect(() => {
        if(pokemonList.length === 0) fetchPokemons();
    },[])

    useEffect(() => {
        if (nextFetchUrl) fetchPokemons();
    },[nextFetchUrl])

    // jsxList to display
    const jsxList = pokemonList.map(
        ( pokemon, index ) => (<PokemonCard 
            key={index} 
            pokemonUrl={pokemon.url} 
            index={index}
            detailed={detailed === index} 
            setDetailed={setDetailed}
        />)
    );

    // Basic Loader
    if (pokemonList.length === 0) return (<div>Loading</div>);

    // Render
    return (
        <div className="pokemon-list">{jsxList}</div>
    );
}

PokemonList.propTypes = {
    pokemons: PropTypes.array 
}

PokemonList.defaultProps = {
    pokemons: []
}

export default PokemonList;
