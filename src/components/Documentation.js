import React from 'react';
// import './Documentation.css'; // Styles for the documentation page

const Documentation = () => {
    return (
        <div className="documentation">
            <h2>API Documentation</h2>
            <p>Welcome to the Dummy API Service documentation. Here you'll find information on how to use our APIs in your projects.</p>

            <h3>Endpoints</h3>
            <ul>
                <li><strong>GET /api/users.json</strong> - Retrieve a list of users.</li>
                <li><strong>GET /api/posts.json</strong> - Retrieve a list of posts.</li>
                <li><strong>GET /api/comments.json</strong> - Retrieve a list of comments.</li>
                <li><strong>GET /api/products.json</strong> - Retrieve a list of products.</li>
                <li><strong>GET /api/books.json</strong> - Retrieve a list of books.</li>
                <li><strong>GET /api/movies.json</strong> - Retrieve a list of movies.</li>
                <li><strong>GET /api/weather.json</strong> - Retrieve weather data.</li>
                <li><strong>GET /api/animals.json</strong> - Retrieve a list of animals.</li>
                <li><strong>GET /api/cities.json</strong> - Retrieve a list of cities.</li>
                <li><strong>GET /api/recipes.json</strong> - Retrieve a list of recipes.</li>
                <li><strong>GET /api/cars.json</strong> - Retrieve a list of cars.</li>
                <li><strong>GET /api/countries.json</strong> - Retrieve a list of countries.</li>
                <li><strong>GET /api/currencies.json</strong> - Retrieve currency data.</li>
                <li><strong>GET /api/quotes.json</strong> - Retrieve a list of quotes.</li>
                <li><strong>GET /api/universities.json</strong> - Retrieve a list of universities.</li>
            </ul>

            <h3>Using the APIs</h3>
            <pre>
{`fetch('http://localhost:5000/api/users.json')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));`}
            </pre>
            <p>This example shows how to fetch data from the Users API using JavaScript.</p>

            <h3>HTTP Status Codes</h3>
            <ul>
                <li><strong>200 OK</strong> - Request was successful.</li>
                <li><strong>201 Created</strong> - Resource was successfully created.</li>
                <li><strong>400 Bad Request</strong> - Request was invalid or malformed.</li>
                <li><strong>401 Unauthorized</strong> - Authentication is required.</li>
                <li><strong>403 Forbidden</strong> - Request is not allowed.</li>
                <li><strong>404 Not Found</strong> - Resource could not be found.</li>
                <li><strong>500 Internal Server Error</strong> - Server encountered an error.</li>
            </ul>
        </div>
    );
};

export default Documentation;
