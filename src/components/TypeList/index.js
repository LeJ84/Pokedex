import React,{ useEffect, useState } from 'react';
import axios from 'axios';

import Type from './Type';
import './style.scss';

/**
 * Component for the type list fetched from API
 */
const TypeList = () => {

    const [urlTypeList, setUrlTypeList] = useState([]);

    /**
     * Fetch the Urls' type in French 
     */
    const fetchTypes = async () => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/type/')
            console.log(response.data.results);
            const fetchedUrl = []
            response.data.results.forEach(element => {
                fetchedUrl.push(element.url);
            });
            setUrlTypeList(fetchedUrl);
        }
        catch (error) {
            console.log(error);
        }
    };

    // At first render fetch from API
    useEffect(() => {
        fetchTypes();
    },[])

    // jsxList to display
    const jsxList = urlTypeList.map(
        (url,index) => <Type key={index} url={url} index={index}/>
    );

    // Basic Loader
    if (urlTypeList.length === 0) return (<div>Loading</div>);

    // Render
    return (
        <div className="type_list">{jsxList}</div>
    );
}

export default TypeList;
