import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Character } from '../Character'

const ListCharacter = () => {
    const [listCharacters, setListCharacters] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/')
            .then(response => {
                console.log(response.data);
                setListCharacters(response.data);
            })
    }, [])

    

    return (
        <div className="wrapper">
            <Character character={listCharacters} />
        </div>
    )
}

export default ListCharacter
