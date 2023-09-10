import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function Character() {
    const [character, setCharacter] = useState(null);
    const [homeworld, setHomeworld] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/people/${id}/`)
            .then((response) => {
                setCharacter(response.data);
                setError(null);

                return axios.get(response.data.homeworld);
            })
            .then((homeworldResponse) => {
                setHomeworld(homeworldResponse.data);
            })
            .catch((error) => {
                console.error(error);
                setError("These aren't the droids you're looking for");
            });
    }, [id]);

    if (error) {
        return (
            <div>
                <p>{error}</p>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9sTb2TPm3C_uGaqtf05UclY5xLOnXhchhdbAtjv1HOdgbtSXS_qN7UP0oEG1682RWICM&usqp=CAU"
                    alt="Obi-Wan Kenobi"
                />
            </div>
        );
    }

    if (!character || !homeworld) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{character.name}</h2>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>
                Homeworld:
                <Link to={`/planets/${extractPlanetId(homeworld.url)}`}>
                    {homeworld.name}
                </Link>
            </p>
            <p>Hair color: {character.hair_color}</p>
        </div>
    );
}

function extractPlanetId(url) {
    const parts = url.split('/');
    return parts[parts.length - 2];
}

export default Character;
