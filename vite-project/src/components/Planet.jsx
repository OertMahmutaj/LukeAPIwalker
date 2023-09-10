import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Planet() {
    const [planet, setPlanet] = useState(null);
    const { id } = useParams();
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}/`)
            .then((response) => {
                setPlanet(response.data);
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

    if (!planet) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{planet.name}</h2>
            <p>Climate: {planet.climate}</p>
            <p>Population: {planet.population}</p>
        </div>
    );
}

export default Planet;
