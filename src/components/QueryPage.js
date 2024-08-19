import React, { useState } from 'react';

const QueryPage = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState(null);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
       
    };

    // const handleQuery = async () => {
    //     const [key, value] = query.split('=');
    //     const url = `/data.json`;
    //     try {
    //         const response = await fetch(url);
    //         console.log(response);
    //         const data = await response.json();

    //         let filteredResults = data[key];

    //         if (value) {
    //             filteredResults = filteredResults.filter(item => item[key] === value || item[key].toLowerCase() === value.toLowerCase());
    //         }

    //         setResults(filteredResults);
    //         console.log(filteredResults);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };

    const handleQuery = async () => {
        // const url = `https://jsonplaceholder.typicode.com/${query}`;
        const url=`http://localhost:5000/api/${query}`;
        // console.log('Query URL:', url);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setResults(data);
            console.log(data);
            
            const filteredResults = filterData(data, query);
            // setResults(filteredResults);
            // console.log(filteredResults);
        } catch (error) {
            console.error('Error fetching data:', error);
            setResults({ error: error.message });
        }
    };

    const filterData = (data, query) => {
        // Example filter logic based on query
        // Assuming query is in the format "key=value"
        const [key, value] = query.split('=');
    //     return data.filter(item => item[key] === value);
    // };
    if (!key || !value) {
        return [];
    }
    return data.filter(item => item[key] && item[key].toString() === value);
};

    return (
        <div className="query-page">
            <h2>Query the Dummy API</h2>

            {/* Query Input */}
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Enter your query (e.g., users?id=1)"
            />
            <button onClick={handleQuery}>Run Query</button>

            {/* Example Queries Section */}
            <div className="query-examples">
                <h3>Example Queries:</h3>
                <ul>
                    <li>
                        <strong>Get user by ID:</strong>{' '}
                        <code>users?id=1</code>
                    </li>
                    <li>
                        <strong>Get all posts:</strong>{' '}
                        <code>posts</code>
                    </li>
                    <li>
                        <strong>Get post by ID:</strong>{' '}
                        <code>posts?id=2</code>
                    </li>
                    <li>
                        <strong>Filter users by name:</strong>{' '}
                        <code>users?name=John Doe</code>
                    </li>
                    <li>
                        <strong>Combine filters:</strong>{' '}
                        <code>posts?id=3&title=Post 3</code>
                    </li>
                </ul>
            </div>

            {/* Query Results */}
            {results && (
                <div className="query-results">
                    <h3>Results:</h3>
                    <pre>{JSON.stringify(results, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default QueryPage;
