import React, { useEffect, useState } from 'react';
import axios from 'axios';

import PokemonCard from '../PokemonCard';
import './style.scss';

const PokemonList = () => {

    const [pokemonList, setPokemonList] = useState([]);

    /**
     * Fetch the Urls' Pokemon Details 
     */
    const fetchPokemons = async () => {
        console.log('render');
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0')
            console.log(response.data.results);
            const fetchedUrl = []
            response.data.results.forEach(element => {
                fetchedUrl.push({
                    ...element
                });
            });
            setPokemonList(fetchedUrl);
        }
        catch (error) {
            console.log(error);
        }
    };

    /* const setPokemonImage = ( index, imgUrl ) => {
       pokemonList[index] = {
            ...pokemonList[index],
            //name: frenchName,
            imgUrl,
        };
        console.log('npl',pokemonList)
        setPokemonList(pokemonList);
    }; */

    // At first render fetch from API
    useEffect(() => {
        fetchPokemons();
    },[])

    // jsxList to display
    /* const jsxList = PokemonList.map(
        ( pokemon, index ) => <PokemonCard key={index} pokemon={pokemon} index={index} />
    ); */
    const jsxList = pokemonList.map(
        ( pokemon, index ) => (<PokemonCard 
            key={index} 
            pokemonUrl={pokemon.url} 
            index={index}
        />)
    );

    // Basic Loader
    if (pokemonList.length === 0) return (<div>Loading</div>);

    // Render
    return (
        <div className="pokemon-list">{jsxList}</div>
    );
}

export default PokemonList;