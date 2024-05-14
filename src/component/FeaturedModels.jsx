// src/components/FeaturedModels.jsx

import React from 'react';

const FeaturedModels = ({ models }) => {
  const featuredModels = models.filter(model => model.featured);

  return (
    <div className="container">
      <h1>Featured Models</h1>
      <div className="row">
        {featuredModels.map(model => (
          <div className="col-md-4" key={model.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{model.name}</h5>
                <p className="card-text">{model.description}</p>
                <a href={`/model/${model.id}`} className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedModels;
