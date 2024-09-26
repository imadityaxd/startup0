import { useState } from 'react';
import axios from 'axios';

const StartupForm = ({ setStartups }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newStartup = { name, description, url };
        
        try {
            const response = await axios.post('http://localhost:5000/api/startups', newStartup);
            setStartups(prev => [...prev, response.data]);
            setName('');
            setDescription('');
            setUrl('');
        } catch (error) {
            console.error('Error adding startup:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Startup Name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                required
            />
            <input
                type="url"
                placeholder="Website URL"
                value={url}
                onChange={e => setUrl(e.target.value)}
                required
            />
            <button type="submit">Add Startup</button>
        </form>
    );
};

export default StartupForm;
