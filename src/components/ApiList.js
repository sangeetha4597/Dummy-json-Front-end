import React, { useState } from 'react';
import ApiItem from './ApiItem';
// import './ApiList.css'; // Styles for the API list

const ApiList = () => {
    const [apis] = useState([
        { id: 'users', name: 'Users API', description: 'Get a list of users with detailed profiles.', file: 'users' },
        { id: 'posts', name: 'Posts API', description: 'Retrieve posts with associated comments and authors.', file: 'posts' },
        // Add other APIs here
        
        { id: 'comments', name: 'Comments API', description: 'Access comments tied to specific posts and users.', file: 'comments' },
        { id: 'products', name: 'Products API', description: 'Fetch product details including price and stock info.', file: 'products' },
        { id: 'books', name: 'Books API', description: 'Get information about various books and authors.', file: 'books' },
        { id: 'movies', name: 'Movies API', description: 'Access movie details including genre and director.', file: 'movies' },
        { id: 'weather', name: 'Weather API', description: 'Get weather reports for different locations.', file: 'weather' },
        { id: 'animals', name: 'Animals API', description: 'Discover information about various animals.', file: 'animals' },
        { id: 'cities', name: 'Cities API', description: 'Learn about different cities and their statistics.', file: 'cities' },
        { id: 'recipes', name: 'Recipes API', description: 'Get delicious recipes with ingredients and steps.', file: 'recipes' },
        { id: 'cars', name: 'Cars API', description: 'Find details about different car models and brands.', file: 'cars' },
        { id: 'countries', name: 'Countries API', description: 'Get information about countries and their statistics.', file: 'countries' },
        { id: 'currencies', name: 'Currencies API', description: 'Retrieve currency information and exchange rates.', file: 'currencies' },
        { id: 'quotes', name: 'Quotes API', description: 'Access inspirational quotes from famous personalities.', file: 'quotes' },
        { id: 'universities', name: 'Universities API', description: 'Find details about universities worldwide.', file: 'universities' },
    ]);

//     return (
//         <div className="api-list">
//             {apis.map(api => (
//                 <ApiItem key={api.id} api={api} />
//             ))}
//         </div>
//     );
// };

// export default ApiList;


const [jsonData, setJsonData] = useState({});

    const fetchJsonData = async (file) => {
        try {
            const response = await fetch(`./data.json${file}`);
            const data = await response.json();
            setJsonData(prev => ({ ...prev, [file]: data }));
        } catch (error) {
            console.error(`Error fetching ${file}:`, error);
        }
    };

    return (
        <div className="api-list">
            {apis.map(api => (
                <div key={api.id}>
                    <ApiItem api={api} />
                    {/* <button onClick={() => fetchJsonData(api.file)}>Fetch JSON</button> */}
                    {jsonData[api.file] && (
                        <pre>{JSON.stringify(jsonData[api.file], null, 2)}</pre>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ApiList;
