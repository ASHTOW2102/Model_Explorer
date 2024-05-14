import React, { useState, useEffect } from 'react';

function BrowseModels() {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/models');
        if (!response.ok) {
          throw new Error('Failed to fetch models');
        }
        const data = await response.json();
        setModels(data.map(model => ({ ...model, expanded: false }))); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching models:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleShowDetails = (id) => {
   
    setModels(prevModels => (
      prevModels.map(model => {
        if (model.id === id) {
          return { ...model, expanded: !model.expanded };
        }
        return model;
      })
    ));
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="models-container">
      {models.map(model => (
        <div key={model.id} className="model-item">
          <div className="model-name">{model.name}</div>
          <button className="details-button" onClick={() => handleShowDetails(model.id)}>
            {model.expanded ? 'Hide Details' : 'Show Details'}
          </button>
          {model.expanded && (
            <div className="model-details">
              
             
              <div>Description: {model.description}</div>
             
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default BrowseModels;
