import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Vehicle() {
    const [vehicle, setVehicle] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/vehicles/${id}/`)
            .then((response) => {
                setVehicle(response.data);
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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9sTb2TPm3C_uGaqtf05UclY5xLOnXhchhdbAtjv1HOdgbtSXS_qN7UP0oEG1682RWICM&usqp=CAU" alt="Obi-Wan Kenobi" />
            </div>
        );
    }

    if (!vehicle) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{vehicle.name}</h2>
            <p>Model: {vehicle.model}</p>
            <p>Manufacturer: {vehicle.manufacturer}</p>
        </div>
    );
}

export default Vehicle;
