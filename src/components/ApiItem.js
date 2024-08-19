

import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ApiItem = ({ api }) => {
    const [jsonData, setJsonData] = useState(null);
    const [isJsonVisible, setIsJsonVisible] = useState(false);

    const handleViewJson = async () => {
        
        if (!jsonData) {
            const url = '/data.json';
            try {
                const response = await fetch(url);
                const data = await response.json();
                setJsonData(data[api.file]);
            } catch (error) {
                console.error(`Error fetching ${api.file}:`, error);
            }
        }
        setIsJsonVisible(!isJsonVisible);
    };

    

    const handleCopyUrl = async () => {
          const apiUrl = `${window.location.origin}/data.json#${api.file}`;
        //  const apiUrl = `${window.location.origin}/api/posts/${api.file}`
      if (navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(apiUrl);
                toast.success('API URL copied to clipboard!');
            } catch (error) {
                console.error('Failed to copy API URL:', error);
                toast.error('Failed to copy API URL. Please try again.');
            }
        } else {
            console.error('Clipboard API not supported');
            toast.error('Clipboard API not supported. Please copy the URL manually.');
        }
    };
    return (
        <div className="api-item">
            <h3>{api.name}</h3>
            <p>{api.description}</p>
        
             <button onClick={handleViewJson} className="view-api">
                {isJsonVisible ? 'Hide JSON' : 'View JSON'}
            </button>
            <button onClick={handleCopyUrl} className="copy-api">Copy URL</button>
            {isJsonVisible && jsonData && (
                <pre className="json-output">{JSON.stringify(jsonData, null, 2)}</pre>
            )}
             <ToastContainer />

        </div>
    );
};

export default ApiItem;