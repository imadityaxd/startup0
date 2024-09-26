import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StartupForm from './components/StartupForm';

export default function Home  () {
    const [startups, setStartups] = useState([]);

    useEffect(() => {
        const fetchStartups = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/startups');
                setStartups(response.data);
            } catch (error) {
                console.error('Error fetching startups:', error);
            }
        };
        fetchStartups();
    }, []);

    return(
    <>
            <h1 className="text-6xl text-red-600">Support Startups</h1>
            <StartupForm setStartups={setStartups} />
            <ul>
                {startups.map(startup => (
                    <li key={startup._id}>
                        <strong>{startup.name}</strong>: {startup.description} <a href={startup.url} target="_blank" rel="noopener noreferrer">Visit</a>
                    </li>
                ))}
            </ul>
    </>
    )
};