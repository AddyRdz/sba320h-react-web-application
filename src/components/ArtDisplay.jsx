import React from 'react'

export default function ArtDisplay({art}) {
  return (
    <>
    <div>
      <div className="art-container">
        {art.data.map((item) => (
          <div key={item.id} className="art-card">
            <h2>Title: {item.title}</h2>
            <img
              src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
              alt={item.title}
              style={{ width: '200px' }}
            />
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
}
