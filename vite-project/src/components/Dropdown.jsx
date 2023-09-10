import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Dropdown() {
    const [resource, setResource] = useState('people');
    const [id, setId] = useState('');
    const navigate = useNavigate();

    const handleResourceChange = (event) => {
        setResource(event.target.value);
    };

    const handleIdChange = (event) => {
        setId(event.target.value);
    };

    const handleSearch = () => {
        if (id) {
            navigate(`/${resource}/${id}`);
        }
    };

    return (
        <div>
            <select onChange={handleResourceChange} value={resource}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
                <option value="starships">Starships</option>
                <option value="vehicles">Vehicles</option>
            </select>
            <input
                type="number"
                placeholder="Enter ID"
                value={id}
                onChange={handleIdChange}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default Dropdown;
