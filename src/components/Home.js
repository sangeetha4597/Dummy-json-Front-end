import React from 'react';

const Home = () => {
    const dummyJson = {
        users: [
            { id: 1, name: 'John Doe', email:"sampl@gmail.com" },
            { id: 2, name: 'Jane Smith', email:" " },   
        ]}

    return (
        <div className="home">
            <h1>Welcome to Our Dummy API Service</h1>
            <p>This is an introduction to our project. Here you can find various APIs and their details.</p>
            <h2>Dummy JSON Data</h2>
            <pre className="json-output">{JSON.stringify(dummyJson, null, 2)}</pre>
            <h2>How to Use the Dummy API</h2>
            <p>Our dummy API provides endpoints to fetch data for users, posts, comments, and products. Below are some examples of how to use these endpoints:</p>
            <h3>Fetching Data</h3>
            <p>You can use the <code>fetch</code> function to make HTTP requests to our API. Here is an example of how to fetch user data:</p>
            <pre>
                <code>
{`fetch('http://localhost:5000/api/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching users:', error));`}
                </code>
            </pre>

           
            <p>You can use the <code>filter</code> function to make HTTP requests to our API. Here is an example of how to fetch and filter user data:</p>
            <pre>
                <code>
{`fetch('/api/users')
    .then(response => response.json())
    .then(data => {
        // Filter users whose name starts with 'J'
        const filteredData = data.filter(user => user.name.startsWith('J'));
        console.log(filteredData);
    })
    .catch(error => console.error('Error fetching users:', error));`}
                </code>
            </pre>
            <h3>Types of HTTP Requests</h3>
            <p>Our API supports the following types of HTTP requests:</p>
            <ul>
                <li><strong>GET:</strong> Fetch data from the server. Example: <code>fetch('http://localhost:5000/api/users')</code></li>
                <li><strong>POST:</strong> Send data to the server. Example:
                    <pre>
                        <code>
{`fetch('http://localhost:5000/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'New User', email: 'newuser@example.com' })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error adding user:', error));`}
                        </code>
                    </pre>
                </li>
                <li><strong>PUT:</strong> Update existing data on the server. Example:
                    <pre>
                        <code>
{`fetch('http://localhost:5000/api/users/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'Updated User', email: 'updateduser@example.com' })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error updating user:', error));`}
                        </code>
                    </pre>
                </li>
                <li><strong>DELETE:</strong> Delete data from the server. Example:
                    <pre>
                        <code>
{`fetch('http://localhost:5000/api/users/1', {
    method: 'DELETE'
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error deleting user:', error));`}
                        </code>
                    </pre>
                </li>
            </ul>
            <p>This data can be used to demonstrate various functionalities such as fetching data, displaying lists, and handling user interactions.</p>
        

        
        
        
        
        
        </div>

        


    );

};

export default Home;