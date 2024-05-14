

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ModelDetail = () => {
  const { id } = useParams();
  const [model, setModel] = useState(null);

  useEffect(() => {
    fetch(`/models/${id}`)
      .then(response => response.json())
      .then(data => setModel(data))
      .catch(error => console.error('Error fetching model details:', error));
  }, [id]);

  if (!model) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>Model Details</h1>
      <h2>{model.name}</h2>
      <p>{model.description}</p>
    </div>
  );
}

export default ModelDetail;
