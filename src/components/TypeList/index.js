import React,{ useEffect, useState } from 'react';
import axios from 'axios';

import Type from './Type';
import './style.scss';

const TypeList = () => {

    const [urlTypeList, setUrlTypeList] = useState([]);

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

    useEffect(() => {
        fetchTypes();
    },[])

    const jsxList = urlTypeList.map((url,index) => <Type key={url} url={url} index={index}/>)

    if (urlTypeList.length === 0) return (<div>Loading</div>);

    return (
        <div className="type_list">{jsxList}</div>
    );
}

export default TypeList;
