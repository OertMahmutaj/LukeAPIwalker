import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Starship() {
    const [starship, setStarship] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/starships/${id}/`)
            .then((response) => {
                setStarship(response.data);
                setError(null);
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

    if (!starship) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{starship.name}</h2>
            <p>Model: {starship.model}</p>
            <p>Manufacturer: {starship.manufacturer}</p>
        </div>
    );
}

export default Starship;
