import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.scss';
import style from '../../data';

const Type = ( {url, index} ) => {
    const [type,setType] = useState();

     const fetchTypesFr = async () => {
        const resfr = await axios.get(url);
        setType({
            name:resfr.data.names[2].name,
            id:resfr.data.id,
        });
    }
    console.log('type',type);

    useEffect( ()=> {fetchTypesFr();},[]); 

    if (!type) return (<p>Loading</p>);
    return (
        <span className="type" style={style[index]}>
            <a className="type-link" href={`/types/${type.id}`}>{type.name}</a>
        </span>
    );
};

export default Type;
