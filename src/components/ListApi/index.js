import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Character } from '../Character'

axios.create({
    baseURL:"https://swapi.dev/api/"
})

const ListPeople = () => {
    const [listCharacters, setListCharacters] = useState([]);
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/1')
            .then(response => {
                console.log(response.data);
                setListCharacters(response.data);
            })
    }, [])

        return (
            <div className="wrapper">
                <h1>My Character List</h1>
                <Character character={listCharacters} />
            </div>
        )
    }

    export default ListPeople
